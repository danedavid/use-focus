import React, { useRef } from 'react';
import { useActiveOnIntersect } from './hooks/useActiveOnIntersect';
import './TextInputFormElement.css'

export const TextInputFormElement = ({ char, active, setActiveElement }) => {
  const containerEl = useRef();

  useActiveOnIntersect(() => setActiveElement(char), containerEl);

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
        />
      </div>
    </div>
  )
};