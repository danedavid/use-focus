import React from 'react';
import './TextInputFormElement.css'

export const NumberInputFormElement = ({ num }) => {
  return (
    <div className='element-container'>
      <div>{`Form - numberfield-${num}: `}</div>
      <div>
        <input
          type='number'
        />
      </div>
    </div>
  )
};