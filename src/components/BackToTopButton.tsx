import { ChevronUp } from "lucide-react";
import { useBackToTop } from "@/hooks/useBackToTop";

const BackToTopButton = () => {
  const { isVisible, scrollToTop } = useBackToTop();

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 w-14 h-14 bg-primary hover:bg-primary-dark text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 animate-fade-in touch-target group"
      aria-label="Back to top"
    >
      <ChevronUp 
        size={24} 
        className="mx-auto group-hover:scale-110 transition-transform duration-200" 
      />
    </button>
  );
};

export default BackToTopButton;