import React, { useRef } from 'react';
import { useActiveOnIntersect } from './hooks/useActiveOnIntersect';
import { useFocusOnActive } from './hooks/useFocusOnActive';
import './TextInputFormElement.css'

export const TextInputFormElement = ({ char, active, setActiveElement }) => {
  const containerEl = useRef();
  const inputRef = useRef();

  useActiveOnIntersect(() => setActiveElement(char), containerEl);
  useFocusOnActive(active, inputRef);

  return (
    <div
      id={`elem${char}`}
      className={'element-container' + (active?' active':'')}
      ref={containerEl}
    >
      <div>{`Form - textfield-${char}: `}</div>
      <div>
        <input
          type='text'
          ref={inputRef}
        />
      </div>
    </div>
  )
};