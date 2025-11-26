import { useEffect, useRef, useState } from 'react';

interface UseFadeInOnScrollOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useFadeInOnScroll = (
  options: UseFadeInOnScrollOptions = {}
): readonly [React.RefObject<HTMLDivElement | null>, boolean] => {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = true
  } = options;
  
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, rootMargin, triggerOnce]);

  return [ref, isVisible];
};

interface FadeInSectionProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
}

export const FadeInSection: React.FC<FadeInSectionProps> = ({ 
  children, 
  delay = 0, 
  duration = 400 
}) => {
  const [ref, isVisible] = useFadeInOnScroll({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: `opacity ${duration}ms ease-out ${delay}ms, transform ${duration}ms ease-out ${delay}ms`
      }}
    >
      {children}
    </div>
  );
};