import { useState } from 'react';
import "./App.css";
import Axios from 'axios';

function App() {
  const [name, setName] = useState("");
  const [qty, setQty] = useState(0);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);

  const [factoryList, setFactoryList] = useState([]);

  const addFactory = () => {
    Axios.post('http://localhost:3001/create', {
      name: name, 
      qty: qty, 
      min: min, 
      max: max
    }).then(() => { console.log("success"); });
  }

  const getFactory = () => {
    Axios.get('http://localhost:3001/factories').then((response) => { 
      setFactoryList(response.data);
    });
  }

  getFactory();

  return (
    <>
      <div className="factorySettings">
        <label>Name:</label>
        <input 
          type="text" 
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label>Qty:</label>
        <input type="number"
          onChange={(e) => {
            setQty(e.target.value);
          }}
        />
        <label>Min:</label>
        <input type="number"
          onChange={(e) => {
            setMin(e.target.value);
          }}
        />
        <label>Max:</label>
        <input type="number"
          onChange={(e) => {
            setMax(e.target.value);
          }}
        />
      </div>
        
      <button onClick={addFactory}>add factory</button>

      <div className="output">
        <h2>Database of factories</h2>
        <div className="data">
          {factoryList.map((val, key) => {
            return <div>{val.name}</div>
          })}
        </div>
      </div>
    </>
  );
}

export default App;
