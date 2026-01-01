import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';

export type Language = 'en' | 'es' | 'pt';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.consultation': 'Consultation',
    'nav.checkOrdering': 'Check Ordering',
    'nav.bookConsultation': 'Book Free Consultation',
    'nav.bookDirectly': 'Book Directly',
    
    // Hero
    'hero.tagline': 'Enterprise-Grade Bookkeeping',
    'hero.subtitle': 'Expert bookkeeping services tailored to small businesses and entrepreneurs.',
    'hero.saveTime': 'Save 15+ hours per month',
    'hero.description': 'with our transparent, compliant financial reporting.',
    'hero.cta': 'Get Started Today - Free Consultation',
    'hero.ctaSecondary': 'Book Directly',
    'hero.noCommitment': 'No commitment',
    'hero.strategySession': '30-minute strategy session',
    'hero.customProposal': 'Custom proposal within 24 hours',
    
    // Benefits
    'benefits.quickbooks': 'QuickBooks Online & Desktop Expertise',
    'benefits.monthly': 'Monthly Bookkeeping & Reconciliation',
    'benefits.accounts': 'Accounts Payable Management',
    'benefits.reporting': 'Compliant Financial Reporting',
    
    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Comprehensive financial solutions',
    'services.quickbooks.title': 'QuickBooks Services',
    'services.quickbooks.description': 'Expert bookkeeping with both QB Online and Desktop platforms',
    'services.monthly.title': 'Monthly Management',
    'services.monthly.description': 'Comprehensive monthly financial management and reporting',
    'services.billing.title': 'Billing & Accounts Payable',
    'services.billing.description': 'Streamlined invoicing and accounts payable management',
    'services.cleanup.title': 'Cleanup & Advisory',
    'services.cleanup.description': 'Financial cleanup and strategic advisory services',
    'services.checks.title': 'Custom Business Checks',
    'services.checks.description': 'Professional custom business checks with security features',
    
    // Quick Links
    'quickLinks.title': 'Quick Links',
    'quickLinks.subtitle': 'Get started or learn more',
    'quickLinks.freeConsultation': 'Free Consultation',
    'quickLinks.ourTeam': 'Our Team',
    'quickLinks.certifications': 'Certifications',
    
    // CTA
    'cta.ready': 'Ready to get started?',
    'cta.schedule': 'Schedule your free consultation today',
    
    // Footer
    'footer.rights': 'All rights reserved',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.cookies': 'Cookie Policy',
    
    // Common
    'common.learnMore': 'Learn More',
    'common.getStarted': 'Get Started',
    'common.contactUs': 'Contact Us',
  },
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.services': 'Servicios',
    'nav.about': 'Nosotros',
    'nav.contact': 'Contacto',
    'nav.consultation': 'Consulta',
    'nav.checkOrdering': 'Pedido de Cheques',
    'nav.bookConsultation': 'Reservar Consulta Gratis',
    'nav.bookDirectly': 'Reservar Directamente',
    
    // Hero
    'hero.tagline': 'Contabilidad de Nivel Empresarial',
    'hero.subtitle': 'Servicios de contabilidad expertos adaptados a pequeñas empresas y emprendedores.',
    'hero.saveTime': 'Ahorra más de 15 horas al mes',
    'hero.description': 'con nuestros informes financieros transparentes y conformes.',
    'hero.cta': 'Comienza Hoy - Consulta Gratis',
    'hero.ctaSecondary': 'Reservar Directamente',
    'hero.noCommitment': 'Sin compromiso',
    'hero.strategySession': 'Sesión de estrategia de 30 minutos',
    'hero.customProposal': 'Propuesta personalizada en 24 horas',
    
    // Benefits
    'benefits.quickbooks': 'Experiencia en QuickBooks Online y Desktop',
    'benefits.monthly': 'Contabilidad Mensual y Reconciliación',
    'benefits.accounts': 'Gestión de Cuentas por Pagar',
    'benefits.reporting': 'Informes Financieros Conformes',
    
    // Services
    'services.title': 'Nuestros Servicios',
    'services.subtitle': 'Soluciones financieras integrales',
    'services.quickbooks.title': 'Servicios QuickBooks',
    'services.quickbooks.description': 'Contabilidad experta con plataformas QB Online y Desktop',
    'services.monthly.title': 'Gestión Mensual',
    'services.monthly.description': 'Gestión financiera mensual completa e informes',
    'services.billing.title': 'Facturación y Cuentas por Pagar',
    'services.billing.description': 'Facturación optimizada y gestión de cuentas por pagar',
    'services.cleanup.title': 'Limpieza y Asesoría',
    'services.cleanup.description': 'Limpieza financiera y servicios de asesoría estratégica',
    'services.checks.title': 'Cheques Empresariales Personalizados',
    'services.checks.description': 'Cheques empresariales profesionales con características de seguridad',
    
    // Quick Links
    'quickLinks.title': 'Enlaces Rápidos',
    'quickLinks.subtitle': 'Comienza o aprende más',
    'quickLinks.freeConsultation': 'Consulta Gratis',
    'quickLinks.ourTeam': 'Nuestro Equipo',
    'quickLinks.certifications': 'Certificaciones',
    
    // CTA
    'cta.ready': '¿Listo para comenzar?',
    'cta.schedule': 'Programa tu consulta gratis hoy',
    
    // Footer
    'footer.rights': 'Todos los derechos reservados',
    'footer.privacy': 'Política de Privacidad',
    'footer.terms': 'Términos de Servicio',
    'footer.cookies': 'Política de Cookies',
    
    // Common
    'common.learnMore': 'Saber Más',
    'common.getStarted': 'Comenzar',
    'common.contactUs': 'Contáctanos',
  },
  pt: {
    // Navigation
    'nav.home': 'Início',
    'nav.services': 'Serviços',
    'nav.about': 'Sobre',
    'nav.contact': 'Contato',
    'nav.consultation': 'Consulta',
    'nav.checkOrdering': 'Pedido de Cheques',
    'nav.bookConsultation': 'Agende Consulta Grátis',
    'nav.bookDirectly': 'Agende Diretamente',
    
    // Hero
    'hero.tagline': 'Contabilidade Nível Empresarial',
    'hero.subtitle': 'Serviços de contabilidade especializados para pequenas empresas e empreendedores.',
    'hero.saveTime': 'Economize mais de 15 horas por mês',
    'hero.description': 'com nossos relatórios financeiros transparentes e conformes.',
    'hero.cta': 'Comece Hoje - Consulta Grátis',
    'hero.ctaSecondary': 'Agende Diretamente',
    'hero.noCommitment': 'Sem compromisso',
    'hero.strategySession': 'Sessão de estratégia de 30 minutos',
    'hero.customProposal': 'Proposta personalizada em 24 horas',
    
    // Benefits
    'benefits.quickbooks': 'Expertise em QuickBooks Online e Desktop',
    'benefits.monthly': 'Contabilidade Mensal e Reconciliação',
    'benefits.accounts': 'Gestão de Contas a Pagar',
    'benefits.reporting': 'Relatórios Financeiros Conformes',
    
    // Services
    'services.title': 'Nossos Serviços',
    'services.subtitle': 'Soluções financeiras abrangentes',
    'services.quickbooks.title': 'Serviços QuickBooks',
    'services.quickbooks.description': 'Contabilidade especializada com plataformas QB Online e Desktop',
    'services.monthly.title': 'Gestão Mensal',
    'services.monthly.description': 'Gestão financeira mensal abrangente e relatórios',
    'services.billing.title': 'Faturamento e Contas a Pagar',
    'services.billing.description': 'Faturamento otimizado e gestão de contas a pagar',
    'services.cleanup.title': 'Limpeza e Consultoria',
    'services.cleanup.description': 'Limpeza financeira e serviços de consultoria estratégica',
    'services.checks.title': 'Cheques Empresariais Personalizados',
    'services.checks.description': 'Cheques empresariais profissionais com recursos de segurança',
    
    // Quick Links
    'quickLinks.title': 'Links Rápidos',
    'quickLinks.subtitle': 'Comece ou saiba mais',
    'quickLinks.freeConsultation': 'Consulta Grátis',
    'quickLinks.ourTeam': 'Nossa Equipe',
    'quickLinks.certifications': 'Certificações',
    
    // CTA
    'cta.ready': 'Pronto para começar?',
    'cta.schedule': 'Agende sua consulta grátis hoje',
    
    // Footer
    'footer.rights': 'Todos os direitos reservados',
    'footer.privacy': 'Política de Privacidade',
    'footer.terms': 'Termos de Serviço',
    'footer.cookies': 'Política de Cookies',
    
    // Common
    'common.learnMore': 'Saiba Mais',
    'common.getStarted': 'Começar',
    'common.contactUs': 'Contate-nos',
  },
};

const languageNames: Record<Language, string> = {
  en: 'English',
  es: 'Español',
  pt: 'Português',
};

const languageFlags: Record<Language, string> = {
  en: '🇺🇸',
  es: '🇪🇸',
  pt: '🇧🇷',
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('language') as Language;
      if (saved && translations[saved]) {
        return saved;
      }
      // Detect browser language
      const browserLang = navigator.language.split('-')[0];
      if (browserLang === 'es') return 'es';
      if (browserLang === 'pt') return 'pt';
    }
    return 'en';
  });

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lang);
      document.documentElement.lang = lang;
    }
  }, []);

  const t = useCallback((key: string): string => {
    return translations[language][key] || key;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export { languageNames, languageFlags };
