import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  const handleClickCount = () =>{
    setCount(count + 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         <div>
        <p>You clicked {count} times</p>
        <button onClick={() => handleClickCount()}>
          Click me
        </button>
      </div>
      </header>
    </div>
  );
}

export function TestFunc(props){
  return(
    <div>{props.name}</div>
  )
}

export default App;
