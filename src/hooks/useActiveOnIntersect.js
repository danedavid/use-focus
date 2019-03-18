import { useEffect } from 'react';

export const useActiveOnIntersect = (setActiveElement, elementRef) => {
  const options = {
    root: document.querySelector('#intersector'),
    rootMargin: '0px',
    threshold: 1.0,
  };

  const callback = (entries) => {
    const entry = entries[0];
    const {
      intersectionRatio,
      isIntersecting,
    } = entry;

    if ( isIntersecting && intersectionRatio === 1 ) {
      setActiveElement();
    }
  };

  useEffect(() => {
    if ( elementRef.current ) {
      const observer = new IntersectionObserver(callback, options);
      observer.observe(elementRef.current);
    }
  }, []);
};