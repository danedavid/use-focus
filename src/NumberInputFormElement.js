import React, { useRef } from 'react';
import { useActiveOnIntersect } from './hooks/useActiveOnIntersect';
import { useFocusOnActive } from './hooks/useFocusOnActive';
import './TextInputFormElement.css'

export const NumberInputFormElement = ({ num, active, setActiveElement }) => {
  const containerEl = useRef();
  const inputRef = useRef();

  useActiveOnIntersect(() => setActiveElement(num), containerEl);
  useFocusOnActive(active, inputRef);

  return (
    <div
      id={`elem${num}`}
      className={'element-container' + (active?' active':'')}
      ref={containerEl}
    >
      <div>{`Form - numberfield-${num}: `}</div>
      <div>
        <input
          type='number'
          ref={inputRef}
        />
      </div>
    </div>
  )
};