import { useState, useEffect } from 'react';

export const useBackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const whyChooseSection = document.getElementById('why-choose');
      
      if (!whyChooseSection) return;

      const whyChooseSectionTop = whyChooseSection.offsetTop;
      const scrollPosition = window.scrollY + 200; // Offset for header

      // Show back to top button when scrolled past the Why Choose section
      setIsVisible(scrollPosition > whyChooseSectionTop);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return {
    isVisible,
    scrollToTop
  };
};