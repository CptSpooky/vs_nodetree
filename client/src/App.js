import React, { useState, useEffect } from 'react';
import "./App.css";
import Axios from 'axios';
import TreeChart from './components/tree-Chart/tree-chart.component';
import Interface from './components/interface/interface.component';
import FormInput from './components/form-input/form-input.component';
import './app.styles.scss';
//import { inspect } from 'util';
//const util = require('util');


export const ThemeContext = React.createContext();

function App() {

  /* States */
  const [name, setName] = useState("");
  const [qty, setQty] = useState(0);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);

  const [currentId, setCurrentId] = useState("");

  /* Factory object */
  const [factoryList, setFactoryList] = useState([]);

  /* Get factories on initial load */
  useEffect(() => {
    getFactory();
  }, [name, qty, min, max, factoryList]);

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

  console.log(currentId);
  console.log("KKKKKKKKKKKKKK: " + name);

  /* Delete factory */
  const deleteFactory = () => {
    console.log("FFFFFFFFFFFFF: " + currentId);
    //console.log(util.inspect(currentId));

    Axios.delete(`http://localhost:3001/factories/${currentId}`);
  }

  /* Update factory */
  const updateFactory = () => {
    Axios.put(`http://localhost:3001/factories/${currentId}`, 
    {
      name: name, 
      qty: qty, 
      min: min, 
      max: max
    }).then(() => { 
      let factory = findFactory(currentId);
      factory.name = name;
      factory.qty = qty;
      factory.min = min;
      factory.max = max;

      setFactoryList(factoryList);
    });
  }

  /* Find selected factory */
  const findFactory = (id) => {
    for(let i = 0; i < factoryList.length; i++){
        if(factoryList[i].id === id){
            return factoryList[i];
        }
    }
    return null;
  }

  /* Updates factory state settings to form */
  const applyCurrentId = (id) => {
    setCurrentId(id);
    console.log("VALUE IN APP ID FFFFFFF: " + id);
    const factory = findFactory(id);
    setName(factory.name);
    setQty(factory.qty);
    setMin(factory.min);
    setMax(factory.max);
  }

  console.log(factoryList)
  console.log(name, qty, min, max);
  console.log("HHHHHHHH: " + currentId)
  return (
      <div className="container">
        <Interface 
          addFactory = {addFactory}
          deleteFactory = {deleteFactory}
        />
        <TreeChart data = {factoryList} 
        selectedId = {value => {applyCurrentId(value)}}        
        />
        <FormInput 
          onChangeSetName = {value => setName(value)}
          onChangeSetQty = {value => setQty(value)}
          onChangeSetMin = {value => setMin(value)}
          onChangeSetMax = {value => setMax(value)}
          updateFactory = {updateFactory}
          currentId = {currentId}
          factoryList = {factoryList}
          name = {name}
          qty = {qty}
          min = {min}
          max = {max}
        />
      </div>
    
    
        /* <div className="factorySettings">
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
        </div> */

      
  );
}

export default App;
