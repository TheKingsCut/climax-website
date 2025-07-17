import { ChevronUp, MessageSquare } from "lucide-react";
import { useBackToTop } from "@/hooks/useBackToTop";
import VapiButton from "./VapiButton";
import maxHelloImage from "@/assets/max-hello.png";

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
        <VapiButton />
      </div>

      {/* Max Mascot and Get Quote Button Row */}
      <div className="flex items-end space-x-3">
        {/* Max Mascot */}
        <img 
          src={maxHelloImage} 
          alt="Max mascot saying hello" 
          className="h-auto animate-fade-in"
        />
        
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
      </div>

      {/* Back to Top Button */}
      <div className="flex justify-end">
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