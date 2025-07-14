import { ChevronUp, MessageSquare } from "lucide-react";
import { useBackToTop } from "@/hooks/useBackToTop";

// Declare the Vapi widget type for TypeScript
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'vapi-widget': {
        'assistant-id': string;
        'public-key': string;
        style?: React.CSSProperties;
      };
    }
  }
}

const FloatingActionButtons = () => {
  const { isVisible, scrollToTop } = useBackToTop();

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 flex flex-col space-y-3 z-50 animate-fade-in">
      {/* Vapi AI Assistant */}
      <div className="flex justify-end">
        <vapi-widget 
          assistant-id="dffc7682-fdc0-473f-b558-ed04e5911ee1"
          public-key="096acd6b-0b19-4863-8cc3-b736305b05ff"
          style={{
            position: 'relative',
            zIndex: 1000
          }}
        />
      </div>

      <div className="flex space-x-3">
        {/* Get Quote Button */}
        <button
          onClick={scrollToContact}
          className="px-4 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 font-medium flex items-center space-x-2 touch-target group"
          aria-label="Get Quote"
        >
          <MessageSquare 
            size={20} 
            className="group-hover:scale-110 transition-transform duration-200" 
          />
          <span>Get Quote</span>
        </button>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="w-14 h-14 bg-primary hover:bg-primary-dark text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 touch-target group"
          aria-label="Back to top"
        >
          <ChevronUp 
            size={24} 
            className="mx-auto group-hover:scale-110 transition-transform duration-200" 
          />
        </button>
      </div>
    </div>
  );
};

export default FloatingActionButtons;