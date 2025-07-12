import { useState, useEffect, useRef } from 'react';

export const useProductNavigation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const headerRef = useRef<HTMLDivElement>(null);
  const lastProductRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const productsSection = document.getElementById('products');
      const lastProduct = document.getElementById('plc-control-system');
      
      if (!productsSection || !lastProduct) return;

      const productsSectionTop = productsSection.offsetTop;
      const productsSectionHeight = productsSection.offsetHeight;
      const lastProductBottom = lastProduct.offsetTop + lastProduct.offsetHeight;
      const scrollPosition = window.scrollY + 200; // Offset for header

      // Show sticky nav when scrolled past the products header
      const shouldShow = scrollPosition > productsSectionTop && scrollPosition < lastProductBottom;
      setIsVisible(shouldShow);
    };

    const observerOptions = {
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    // Observe all product sections
    const productSections = document.querySelectorAll('[id^="inverter-"], [id^="air-cooled-"], [id^="evaporative-"], [id^="dehumidifiers"], [id^="humidifiers"], [id^="plc-"]');
    productSections.forEach((section) => observer.observe(section));

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 120; // Account for sticky header
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return {
    isVisible,
    activeSection,
    scrollToSection
  };
};