import React from 'react';
import './TextInputFormElement.css'

export const TextInputFormElement = ({ char }) => {
  return (
    <div className='element-container'>
      <div>{`Form - textfield-${char}: `}</div>
      <div>
        <input
          type='text'
        />
      </div>
    </div>
  )
};