import React, { Component } from 'react';
import { TextInputFormElement } from './TextInputFormElement';
import { NumberInputFormElement } from './NumberInputFormElement';
import logo from './logo.svg';
import './App.css';

const data = ['a', 1, 'b', 2, 'c', 3, 'd', 4, 'e', 5];

const App = () => {
  return (
    <>
      <div className="app-container">
        {
          data.map(item => (
            typeof item === 'number'
            ? <NumberInputFormElement
              key={item}
              num={item}
            />
            : <TextInputFormElement
              key={item}
              char={item}
            />
          ))
        }
      </div>
      <div className='intersection-line'></div>
    </>
  );
}

export default App;
