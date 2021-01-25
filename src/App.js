import { useState } from 'react';
import './App.css';

function App({name}) {
  const [status, setStatus] = useState('not delivered');

  return (
    <div className="App">
      <h1>the package is: {status}</h1>
      <button onClick={() => setStatus("Delivered")}>Deliver</button>
    </div>
  );
}

export default App;
