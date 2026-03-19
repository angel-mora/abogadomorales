import { useEffect, useRef } from 'react';
import { trackScrollDepth } from '@/app/utils/analytics';

export const useScrollDepth = () => {
  const trackedDepths = useRef(new Set<number>());

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      const scrollPercentage = Math.round(
        (scrollTop / (documentHeight - windowHeight)) * 100
      );

      // Track at 25%, 50%, 75%, and 100%
      const milestones = [25, 50, 75, 100];
      milestones.forEach((milestone) => {
        if (
          scrollPercentage >= milestone &&
          !trackedDepths.current.has(milestone)
        ) {
          trackedDepths.current.add(milestone);
          trackScrollDepth(milestone);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
};
