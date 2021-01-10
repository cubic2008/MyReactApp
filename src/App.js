import logo from './logo.svg';
import React, { useState } from 'react';

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

  const [myData, setMyData] = useState ( "Hi" );

  return <div>
    <h1>Hello</h1>
    <h2>{myData}</h2>
  </div>
}

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}


export default App;
