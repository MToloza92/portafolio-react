import { useEffect, useRef, useState } from "react";

export function useInView(options = { threshold: 0.2 }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element); // anima solo una vez
        }
      },
      options
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [options]);

  return { ref, isVisible };
}
