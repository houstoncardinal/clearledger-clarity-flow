import React, { useEffect } from 'react';

declare global {
  interface Window {
    Calendly: any;
  }
}

interface CalendlyWidgetProps {
  url?: string;
  height?: number;
}

const CalendlyWidget: React.FC<CalendlyWidgetProps> = ({ 
  url = "https://calendly.com/jj-yourclearledger", 
  height = 700 
}) => {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div 
      className="calendly-inline-widget rounded-lg overflow-hidden shadow-lg" 
      data-url={url}
      style={{ minWidth: '320px', height: `${height}px` }}
    />
  );
};

export default CalendlyWidget;