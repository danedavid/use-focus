import { useEffect } from 'react';

export const useFocusOnActive = (active, inputRef) => {
  useEffect(() => {
    if ( active && inputRef.current ) {
      inputRef.current.focus();
      return () => inputRef.current.blur();
    }
  }, [active]);
};