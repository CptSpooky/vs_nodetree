import { useState, useEffect } from 'react';
import "./App.css";
import Axios from 'axios';

function App() {

  /* States */
  const [name, setName] = useState("");
  const [qty, setQty] = useState(0);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);

  /* Get factories on initial load */
  useEffect(() => {
    getFactory();
  }, []);

  /* Factory object */
  const [factoryList, setFactoryList] = useState([]);

  /* Get factories */
  const getFactory = () => {
    Axios.get('http://localhost:3001/factories').then((response) => { 
      setFactoryList(response.data);
    });
  }

  /* Add Factory */
  const addFactory = () => {
    Axios.post('http://localhost:3001/create', {
      name: name, 
      qty: qty, 
      min: min, 
      max: max
    }).then(() => { 
      setFactoryList([
        ...factoryList,
        {
          name: name, 
          qty: qty, 
          min: min, 
          max: max
        }
      ]);
    });
  }

  /* Delete factory */
  const deleteFactory = (id) => {
    console.log('delete: ' + id);
    Axios.delete(`http://localhost:3001/factories/${id}`);
  }

  // /* Update factory */
  // const updateFactory = (id) => {
  //   console.log('update: ' + id);
  //   Axios.put(`http://localhost:3001/factories/${id}`, 
  //   {
  //     name: name, 
  //     qty: qty, 
  //     min: min, 
  //     max: max
  //   }).then(() => { 
  //     setFactoryList([
  //       ...factoryList,
  //       {
  //         name: name, 
  //         qty: qty, 
  //         min: min, 
  //         max: max
  //       }
  //     ]);
  //   });
  // }


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
      <button onClick={getFactory}>get factories</button>

      <div className="output">
        <h2>Database of factories</h2>
        <div className="data">
          {factoryList.map((val, key) => {
            console.log("VAL: " + JSON.stringify(val));
            return (
              <div className="card" tabIndex="-1" key={key}>
                <p>{val.name}</p>
                <p>{val.qty}</p>
                <p>{val.min}</p>
                <p>{val.max}</p>
                <button>Edit</button>
                <button onClick={() =>{deleteFactory(val.id)}}>Delete</button>

              </div>
            
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
