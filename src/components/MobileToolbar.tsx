import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Phone, 
  Calculator, 
  FileText, 
  Info, 
  X, 
  Plus,
  MessageCircle,
  Calendar,
  Users,
  TrendingUp,
  Shield,
  ArrowRight,
  Mail,
  Sparkles,
  Zap,
  Target,
  Crown,
  Hexagon,
  Circle,
  Square,
  Triangle
} from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const MobileToolbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [pulseEffect, setPulseEffect] = useState(false);
  const [revealStep, setRevealStep] = useState(0);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const isMobile = useIsMobile();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Floating animation effect
  useEffect(() => {
    if (!isOpen) {
      const interval = setInterval(() => {
        setPulseEffect(true);
        setTimeout(() => setPulseEffect(false), 600);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isOpen]);

  // Optimized reveal animation sequence
  useEffect(() => {
    if (isOpen) {
      // Use requestAnimationFrame for smooth animations
      const frame1 = requestAnimationFrame(() => setRevealStep(1));
      const frame2 = requestAnimationFrame(() => {
        setTimeout(() => setRevealStep(2), 150);
      });
      const frame3 = requestAnimationFrame(() => {
        setTimeout(() => setRevealStep(3), 250);
      });
      return () => {
        cancelAnimationFrame(frame1);
        cancelAnimationFrame(frame2);
        cancelAnimationFrame(frame3);
      };
    } else {
      setRevealStep(0);
    }
  }, [isOpen]);

  // Optimized magnetic effect on button
  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      // Throttle with requestAnimationFrame for smooth performance
      if (animationFrameId) return;
      
      animationFrameId = requestAnimationFrame(() => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        button.style.transform = `translate(${x * 0.05}px, ${y * 0.05}px)`;
        animationFrameId = 0;
      });
    };

    const handleMouseLeave = () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = 0;
      }
      button.style.transform = 'translate(0px, 0px)';
    };

    button.addEventListener('mousemove', handleMouseMove, { passive: true });
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      button.removeEventListener('mousemove', handleMouseMove);
      button.removeEventListener('mouseleave', handleMouseLeave);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  const toolbarItems = [
    {
      title: 'Call',
      description: 'Speak with experts',
      icon: Phone,
      action: () => window.location.href = 'tel:(903) 815-9488',
      color: 'bg-gradient-to-br from-emerald-400 via-emerald-500 to-emerald-600',
      gradient: 'from-emerald-400/30 via-emerald-500/20 to-emerald-600/30',
      href: null,
      shape: 'circle',
      accent: 'from-emerald-300 to-emerald-400'
    },
    {
      title: 'Quote',
      description: 'Get custom quote',
      icon: Calculator,
      action: null,
      color: 'bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600',
      gradient: 'from-blue-400/30 via-blue-500/20 to-blue-600/30',
      href: '/consultation',
      shape: 'hexagon',
      accent: 'from-blue-300 to-blue-400'
    },
    {
      title: 'Services',
      description: 'View all services',
      icon: FileText,
      action: null,
      color: 'bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600',
      gradient: 'from-purple-400/30 via-purple-500/20 to-purple-600/30',
      href: '/services',
      shape: 'square',
      accent: 'from-purple-300 to-purple-400'
    },
    {
      title: 'Contact',
      description: 'Send message',
      icon: Mail,
      action: null,
      color: 'bg-gradient-to-br from-pink-400 via-pink-500 to-pink-600',
      gradient: 'from-pink-400/30 via-pink-500/20 to-pink-600/30',
      href: '/contact',
      shape: 'triangle',
      accent: 'from-pink-300 to-pink-400'
    }
  ];

  if (!isMobile) return null;

  return (
    <>
      {/* Optimized Floating Action Button */}
      <button
        ref={buttonRef}
        onClick={() => {
          setIsAnimating(true);
          requestAnimationFrame(() => {
            setTimeout(() => setIsOpen(true), 150);
          });
        }}
        className={`fixed bottom-4 right-4 z-50 w-12 h-12 bg-gradient-to-br from-primary via-primary to-primary-dark text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center group backdrop-blur-md border border-white/30 hover:scale-110 hover:border-white/40 ${
          pulseEffect ? 'animate-pulse scale-110' : ''
        } ${isAnimating ? 'scale-95' : 'scale-100'} ${isOpen ? 'rotate-180' : 'rotate-0'}`}
        aria-label="Open mobile toolbar"
        style={{
          boxShadow: pulseEffect 
            ? '0 0 16px rgba(203, 108, 230, 0.3), 0 4px 20px rgba(0, 0, 0, 0.1)' 
            : '0 4px 20px rgba(0, 0, 0, 0.1)',
          willChange: 'transform'
        }}
      >
        {/* Optimized animated background rings */}
        <div className={`absolute inset-0 rounded-full bg-gradient-to-br from-primary/15 to-primary-dark/15 animate-ping ${pulseEffect ? 'scale-120' : 'scale-100'}`} style={{ willChange: 'transform' }}></div>
        
        {/* Main button content */}
        <div className="relative z-10 flex items-center justify-center">
          <Plus className={`w-5 h-5 transition-all duration-300 ${isOpen ? 'rotate-45 scale-110' : 'rotate-0 scale-100'}`} />
          {pulseEffect && (
            <Sparkles className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 text-yellow-300 animate-bounce" />
          )}
        </div>
      </button>

      {/* Luxury Mobile Toolbar Popup */}
      {isOpen && (
        <div className="fixed inset-0 z-50" onClick={() => setIsOpen(false)}>
          <div 
            ref={popupRef}
            className={`absolute bottom-20 right-6 left-6 sm:left-auto w-auto max-w-[calc(100vw-1.5rem)] bg-background/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-300 ${
              revealStep >= 1 ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'
            }`}
            onClick={(e) => e.stopPropagation()}
            style={{
              boxShadow: '0 35px 60px -12px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.15)',
              transform: `translateY(${revealStep >= 1 ? '0' : '20px'}) scale(${revealStep >= 1 ? '1' : '0.95'})`,
              willChange: 'transform, opacity'
            }}
          >
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 animate-pulse"></div>
            
            {/* Luxury Header */}
            <div className={`relative flex items-center justify-between p-4 border-b border-white/10 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 transition-all duration-200 ${
              revealStep >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`} style={{ willChange: 'transform, opacity' }}>
              <div className="flex items-center flex-1">
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-bold text-foreground leading-tight">
                    ClearLedger Solutions Helper
                  </h3>
                  <p className="text-xs text-muted-foreground">ClearLedger excellence</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/10 rounded-full transition-all duration-300 hover:scale-110 flex-shrink-0"
              >
                <X className="w-3 h-3" />
              </button>
            </div>

            {/* Optimized Toolbar Grid */}
            <div className={`relative p-3 transition-all duration-200 ${
              revealStep >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`} style={{ willChange: 'transform, opacity' }}>
              <div className="grid grid-cols-2 gap-3 mobile-toolbar-grid">
                {toolbarItems.map((item, index) => {
                  const IconComponent = item.icon;
                  const isActive = activeIndex === index;
                  const isHovered = hoveredItem === index;
                  
                  const getShapeIcon = (shape: string) => {
                    switch(shape) {
                      case 'circle': return Circle;
                      case 'hexagon': return Hexagon;
                      case 'square': return Square;
                      case 'triangle': return Triangle;
                      default: return Circle;
                    }
                  };
                  
                  const ShapeIcon = getShapeIcon(item.shape);
                  
                  const content = (
                    <div 
                      ref={(el) => itemsRef.current[index] = el}
                      className={`relative flex flex-col items-center text-center p-4 rounded-xl border transition-all duration-300 group cursor-pointer overflow-hidden mobile-toolbar-item ${
                        isActive 
                          ? 'border-primary/50 bg-gradient-to-br from-primary/10 to-primary/5 scale-105 shadow-xl' 
                          : 'border-white/10 hover:border-primary/30 bg-card/50 hover:bg-card/80 hover:scale-105'
                      }`}
                      onMouseEnter={() => {
                        setActiveIndex(index);
                        setHoveredItem(index);
                      }}
                      onMouseLeave={() => {
                        setActiveIndex(null);
                        setHoveredItem(null);
                      }}
                      style={{
                        transform: `translateY(${revealStep >= 3 ? '0' : '20px'}) scale(${revealStep >= 3 ? '1' : '0.8'})`,
                        transitionDelay: `${index * 25}ms`,
                        willChange: 'transform'
                      }}
                    >
                      {/* Optimized animated background */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-200`}></div>
                      
                      {/* Luxury icon container with shape */}
                      <div className={`relative w-12 h-12 ${item.color} rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-all duration-300 shadow-xl group-hover:shadow-2xl`} style={{ willChange: 'transform' }}>
                        <IconComponent className="w-6 h-6 text-white" />
                        {isHovered && (
                          <div className="absolute inset-0 rounded-full bg-white/20 animate-ping"></div>
                        )}
                        {/* Luxury shape accent */}
                        <div className={`absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br ${item.accent} rounded-full opacity-80 shadow-lg`}>
                          <ShapeIcon className="w-2.5 h-2.5 text-white" />
                        </div>
                      </div>
                      
                      {/* Luxury text content */}
                      <h4 className="font-bold text-foreground text-sm mb-1 relative z-10">{item.title}</h4>
                      <p className="text-xs text-muted-foreground leading-tight relative z-10">{item.description}</p>
                      
                      {/* Optimized hover effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                    </div>
                  );

                  if (item.href) {
                    return (
                      <Link
                        key={index}
                        to={item.href}
                        onClick={() => setIsOpen(false)}
                        className="block"
                      >
                        {content}
                      </Link>
                    );
                  } else if (item.action) {
                    return (
                      <button
                        key={index}
                        onClick={() => {
                          item.action?.();
                          setIsOpen(false);
                        }}
                        className="block w-full"
                      >
                        {content}
                      </button>
                    );
                  }

                  return (
                    <div key={index}>
                      {content}
                    </div>
                  );
                })}
              </div>

              {/* Optimized CTA Section */}
              <div className={`mt-3 p-3 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-lg border border-primary/30 relative overflow-hidden transition-all duration-200 ${
                revealStep >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`} style={{ transitionDelay: '200ms', willChange: 'transform, opacity' }}>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent animate-pulse"></div>
                <div className="relative flex items-center justify-between">
                  <div className="flex-1">
                    <h4 className="font-bold text-foreground text-xs flex items-center">
                      <Zap className="w-3 h-3 mr-1 text-yellow-500 animate-pulse" />
                      Get started
                    </h4>
                    <p className="text-xs text-muted-foreground">Free consultation</p>
                  </div>
                  <Link to="/consultation" onClick={() => setIsOpen(false)}>
                    <Button size="sm" className="btn-primary text-xs px-3 py-1.5 h-7 bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105">
                      Book
                      <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileToolbar; 