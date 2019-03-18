import React, { useRef } from 'react';
import { useActiveOnIntersect } from './hooks/useActiveOnIntersect';
import './TextInputFormElement.css'

export const NumberInputFormElement = ({ num, active, setActiveElement }) => {
  const containerEl = useRef();

  useActiveOnIntersect(() => setActiveElement(num), containerEl);

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
        />
      </div>
    </div>
  )
};