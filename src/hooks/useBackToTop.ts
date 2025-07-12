import { useState, useEffect } from 'react';

export const useBackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const productsSection = document.getElementById('products');
      
      if (!productsSection) return;

      const productsSectionTop = productsSection.offsetTop;
      const scrollPosition = window.scrollY + 200; // Offset for header

      // Show back to top button when scrolled past the products section
      setIsVisible(scrollPosition > productsSectionTop);
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