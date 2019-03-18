import React, { useState } from 'react';
import { TextInputFormElement } from './TextInputFormElement';
import { NumberInputFormElement } from './NumberInputFormElement';
import './App.css';

const data = ['a', 1, 'b', 2, 'c', 3, 'd', 4, 'e', 5];

const App = () => {
  const [activeElement, setActiveElement] = useState('a');

  return (
    <>
    <div id='intersector' className='intersection-line'>
      <div className="app-container">
        
        {
          data.map(item => (
            typeof item === 'number'
            ? <NumberInputFormElement
              active={activeElement === item}
              key={item}
              num={item}
              setActiveElement={setActiveElement}
            />
            : <TextInputFormElement
              active={activeElement === item}
              key={item}
              char={item}
              setActiveElement={setActiveElement}
            />
          ))
        }
        </div>
      </div>
    </>
  );
}

export default App;
