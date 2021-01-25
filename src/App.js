import { useState } from 'react';
import './App.css';

function App({name}) {
  const [status, setStatus] = useState('not delivered');
  const [checked, setChecked] = useState(false);

  return (
    <div className="App">
      <h1>the package is: {status}</h1>
      <button onClick={() => setStatus("Delivered")}>Deliver</button>
      <input type="checkbox" value={checked} 
      onChange={() => setChecked(value => !value)}/>
      <p>{checked ? "checked" : "not checked"}</p>
    </div>
  );
}

export default App;
