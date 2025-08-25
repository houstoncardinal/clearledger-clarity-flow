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
      action: () => window.location.href = 'tel:+1-713-555-0123',
      color: 'bg-gradient-to-br from-emerald-400 via-emerald-500 to-emerald-600',
      gradient: 'from-emerald-400/30 via-emerald-500/20 to-emerald-600/30',
      href: null,
      badge: 'Hot',
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
      badge: 'Free',
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
      badge: null,
      shape: 'square',
      accent: 'from-purple-300 to-purple-400'
    },
    {
      title: 'QuickBooks',
      description: 'QB Services',
      icon: TrendingUp,
      action: null,
      color: 'bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600',
      gradient: 'from-orange-400/30 via-orange-500/20 to-orange-600/30',
      href: '/quickbooks-services',
      badge: 'Pro',
      shape: 'triangle',
      accent: 'from-orange-300 to-orange-400'
    },
    {
      title: 'Management',
      description: 'Monthly services',
      icon: Calendar,
      action: null,
      color: 'bg-gradient-to-br from-indigo-400 via-indigo-500 to-indigo-600',
      gradient: 'from-indigo-400/30 via-indigo-500/20 to-indigo-600/30',
      href: '/monthly-management',
      badge: null,
      shape: 'circle',
      accent: 'from-indigo-300 to-indigo-400'
    },
    {
      title: 'Contact',
      description: 'Send message',
      icon: Mail,
      action: null,
      color: 'bg-gradient-to-br from-pink-400 via-pink-500 to-pink-600',
      gradient: 'from-pink-400/30 via-pink-500/20 to-pink-600/30',
      href: '/contact',
      badge: null,
      shape: 'hexagon',
      accent: 'from-pink-300 to-pink-400'
    },
    {
      title: 'About',
      description: 'Our team',
      icon: Users,
      action: null,
      color: 'bg-gradient-to-br from-teal-400 via-teal-500 to-teal-600',
      gradient: 'from-teal-400/30 via-teal-500/20 to-teal-600/30',
      href: '/about',
      badge: null,
      shape: 'square',
      accent: 'from-teal-300 to-teal-400'
    },
    {
      title: 'Certified',
      description: 'Credentials',
      icon: Shield,
      action: null,
      color: 'bg-gradient-to-br from-cyan-400 via-cyan-500 to-cyan-600',
      gradient: 'from-cyan-400/30 via-cyan-500/20 to-cyan-600/30',
      href: '/about',
      badge: 'Certified',
      shape: 'triangle',
      accent: 'from-cyan-300 to-cyan-400'
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
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-br from-primary via-primary to-primary-dark text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center group backdrop-blur-sm border border-white/20 ${
          pulseEffect ? 'animate-pulse scale-110' : ''
        } ${isAnimating ? 'scale-95' : 'scale-100'} ${isOpen ? 'rotate-180' : 'rotate-0'}`}
        aria-label="Open mobile toolbar"
        style={{
          boxShadow: pulseEffect 
            ? '0 0 20px rgba(203, 108, 230, 0.4), 0 8px 32px rgba(0, 0, 0, 0.12)' 
            : '0 8px 32px rgba(0, 0, 0, 0.12)',
          willChange: 'transform'
        }}
      >
        {/* Optimized animated background rings */}
        <div className={`absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-primary-dark/20 animate-ping ${pulseEffect ? 'scale-125' : 'scale-100'}`} style={{ willChange: 'transform' }}></div>
        
        {/* Main button content */}
        <div className="relative z-10 flex items-center justify-center">
          <Plus className={`w-6 h-6 transition-all duration-300 ${isOpen ? 'rotate-45 scale-110' : 'rotate-0 scale-100'}`} />
          {pulseEffect && (
            <Sparkles className="absolute -top-1 -right-1 w-3 h-3 text-yellow-300 animate-bounce" />
          )}
        </div>
      </button>

      {/* Optimized Mobile Toolbar Popup */}
      {isOpen && (
        <div className="fixed inset-0 z-50" onClick={() => setIsOpen(false)}>
          <div 
            ref={popupRef}
            className={`absolute bottom-20 right-6 w-72 bg-background/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-300 ${
              revealStep >= 1 ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'
            }`}
            onClick={(e) => e.stopPropagation()}
            style={{
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)',
              transform: `translateY(${revealStep >= 1 ? '0' : '20px'}) scale(${revealStep >= 1 ? '1' : '0.95'})`,
              willChange: 'transform, opacity'
            }}
          >
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 animate-pulse"></div>
            
            {/* Optimized Header */}
            <div className={`relative flex items-center justify-between p-3 border-b border-white/10 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 transition-all duration-200 ${
              revealStep >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`} style={{ willChange: 'transform, opacity' }}>
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full animate-pulse"></div>
                <div>
                  <h3 className="text-xs font-bold text-foreground flex items-center">
                    <Crown className="w-3 h-3 mr-1 text-yellow-500" />
                    Quick Actions
                  </h3>
                  <p className="text-xs text-muted-foreground">ClearLedger services</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/10 rounded-full transition-all duration-300 hover:scale-110"
              >
                <X className="w-3 h-3" />
              </button>
            </div>

            {/* Optimized Toolbar Grid */}
            <div className={`relative p-3 transition-all duration-200 ${
              revealStep >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`} style={{ willChange: 'transform, opacity' }}>
              <div className="grid grid-cols-4 gap-2">
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
                      className={`relative flex flex-col items-center text-center p-2 rounded-lg border transition-all duration-200 group cursor-pointer overflow-hidden ${
                        isActive 
                          ? 'border-primary/50 bg-gradient-to-br from-primary/10 to-primary/5 scale-105 shadow-lg' 
                          : 'border-white/10 hover:border-primary/30 bg-card/50 hover:bg-card/80 hover:scale-102'
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
                      
                      {/* Badge */}
                      {item.badge && (
                        <div className="absolute -top-0.5 -right-0.5 z-10">
                          <span className={`px-1 py-0.5 text-xs font-bold rounded-full ${
                            item.badge === 'Hot' ? 'bg-red-500 text-white' :
                            item.badge === 'Free' ? 'bg-green-500 text-white' :
                            item.badge === 'Pro' ? 'bg-orange-500 text-white' :
                            'bg-blue-500 text-white'
                          }`}>
                            {item.badge}
                          </span>
                        </div>
                      )}
                      
                      {/* Optimized icon container with shape */}
                      <div className={`relative w-8 h-8 ${item.color} rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-all duration-200 shadow-lg group-hover:shadow-xl`} style={{ willChange: 'transform' }}>
                        <IconComponent className="w-4 h-4 text-white" />
                        {isHovered && (
                          <div className="absolute inset-0 rounded-full bg-white/20 animate-ping"></div>
                        )}
                        {/* Shape accent */}
                        <div className={`absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br ${item.accent} rounded-full opacity-60`}>
                          <ShapeIcon className="w-2 h-2 text-white" />
                        </div>
                      </div>
                      
                      {/* Text content */}
                      <h4 className="font-bold text-foreground text-xs mb-0.5 relative z-10">{item.title}</h4>
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