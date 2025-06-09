import { useState, useEffect, RefObject } from 'react';

interface UseInViewOptions {
  threshold?: number;
  rootMargin?: string;
}

export const useInView = (
  ref: RefObject<HTMLElement>,
  options: UseInViewOptions = {}
) => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options.threshold, options.rootMargin]);

  return isInView;
}; 