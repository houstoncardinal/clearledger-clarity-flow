import { useState } from 'react';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { useLanguage, Language, languageNames, languageFlags } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';

interface LanguageSwitcherProps {
  variant?: 'default' | 'compact';
  className?: string;
}

const LanguageSwitcher = ({ variant = 'default', className }: LanguageSwitcherProps) => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages: Language[] = ['en', 'es', 'pt'];

  return (
    <div className={cn('relative', className)}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        onBlur={() => setTimeout(() => setIsOpen(false), 150)}
        className={cn(
          'flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300',
          'hover:bg-accent hover:text-primary',
          'focus:outline-none focus:ring-2 focus:ring-primary/20',
          'border border-transparent hover:border-border/50',
          variant === 'compact' && 'px-2 py-1.5'
        )}
        aria-label="Select language"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <Globe className={cn('w-4 h-4 text-muted-foreground', variant === 'compact' && 'w-3.5 h-3.5')} />
        <span className={cn('text-sm font-medium text-foreground', variant === 'compact' && 'text-xs')}>
          {languageFlags[language]} {variant === 'default' && languageNames[language]}
        </span>
        <ChevronDown 
          className={cn(
            'w-3.5 h-3.5 text-muted-foreground transition-transform duration-200',
            isOpen && 'rotate-180'
          )} 
        />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div 
          className={cn(
            'absolute top-full right-0 mt-2 w-44 py-2',
            'bg-card border border-border rounded-xl shadow-xl',
            'animate-in fade-in-0 zoom-in-95 duration-200',
            'z-50'
          )}
          role="listbox"
          aria-label="Language options"
        >
          {languages.map((lang) => (
            <button
              key={lang}
              onClick={() => {
                setLanguage(lang);
                setIsOpen(false);
              }}
              className={cn(
                'w-full flex items-center justify-between px-4 py-2.5',
                'text-sm font-medium transition-colors duration-150',
                'hover:bg-accent/50',
                language === lang 
                  ? 'text-primary bg-accent/30' 
                  : 'text-foreground'
              )}
              role="option"
              aria-selected={language === lang}
            >
              <span className="flex items-center gap-3">
                <span className="text-base">{languageFlags[lang]}</span>
                <span>{languageNames[lang]}</span>
              </span>
              {language === lang && (
                <Check className="w-4 h-4 text-primary" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
