import { useState, useEffect, useRef } from 'react';

export const useScrollAnimation = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    const handleScroll = () => {
      if (!element || !isInView) return;

      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementHeight = rect.height;
      
      // Calculate element center position relative to viewport center
      const elementCenter = rect.top + elementHeight / 2;
      const viewportCenter = windowHeight / 2;
      
      // Distance from viewport center (0 when centered)
      const distanceFromCenter = Math.abs(elementCenter - viewportCenter);
      
      // Maximum distance where animation should be active
      const maxDistance = windowHeight / 2 + elementHeight / 2;
      
      // Progress: 1 when centered, 0 when at max distance
      // Creates a bell curve: 0 → 1 → 0
      const progress = Math.max(0, 1 - (distanceFromCenter / maxDistance));
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isInView]);

  return { scrollProgress, isInView, elementRef };
};