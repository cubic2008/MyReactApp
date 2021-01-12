import logo from './logo.svg';
import React, { useState, useEffect } from 'react';

import './App.css';

function App() {
  return (
    <div className="App">
      <MyPage1 />
      <Example></Example>
    </div>
  );
}

function MyPage1 ( ) {

  const [myData, setMyData] = useState ( "Hi, have a great day!" );

  return <div>
    <h1>Hello</h1>
    <h2>{myData}</h2>
  </div>
}

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  function testF() {
    setCount(count + 1);
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={testF}>
        Click me
      </button>
    </div>
  );
}


export default App;
