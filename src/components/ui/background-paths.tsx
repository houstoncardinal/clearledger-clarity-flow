"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useMemo } from "react";

function FloatingPaths({ position }: { position: number }) {
    const shouldReduceMotion = useReducedMotion();
    
    const paths = useMemo(() => Array.from({ length: 36 }, (_, i) => ({
        id: i,
        d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
            380 - i * 5 * position
        } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
            152 - i * 5 * position
        } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
            684 - i * 5 * position
        } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
        // Subtle, refined purple paths
        color: `hsla(270, 50%, 60%, ${0.03 + i * 0.008})`,
        width: 0.3 + i * 0.02,
    })), [position]);

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <svg
                className="w-full h-full"
                viewBox="0 0 696 316"
                fill="none"
                preserveAspectRatio="xMidYMid slice"
            >
                <title>Background Paths</title>
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke={path.color}
                        strokeWidth={path.width}
                        strokeOpacity={0.5}
                        initial={{ pathLength: 0.3, opacity: 0.3 }}
                        animate={shouldReduceMotion ? {} : {
                            pathLength: 1,
                            opacity: [0.3, 0.7, 0.3],
                            pathOffset: [0, 1],
                        }}
                        transition={{
                            duration: 15 + path.id * 0.5,
                            repeat: Infinity,
                            ease: "linear",
                            delay: path.id * 0.08,
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}

export function BackgroundPaths() {
    return (
        <div className="absolute inset-0 overflow-hidden">
            {/* Left side paths */}
            <FloatingPaths position={1} />
            {/* Right side paths - mirrored */}
            <FloatingPaths position={-1} />
            
            {/* Additional ambient glow effects */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-40" />
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl opacity-30" />
        </div>
    );
}
