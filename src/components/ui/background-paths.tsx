"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useMemo } from "react";

function FloatingPaths({ position }: { position: number }) {
    const shouldReduceMotion = useReducedMotion();
    
    const paths = useMemo(() => Array.from({ length: 42 }, (_, i) => ({
        id: i,
        d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
            380 - i * 5 * position
        } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
            152 - i * 5 * position
        } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
            684 - i * 5 * position
        } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
        // Enhanced brand purple gradient with better visibility
        color: `hsla(270, 70%, 50%, ${0.08 + i * 0.02})`,
        width: 0.8 + i * 0.05,
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
                        strokeOpacity={0.8}
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
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-60" />
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/8 rounded-full blur-3xl opacity-50" />
        </div>
    );
}
