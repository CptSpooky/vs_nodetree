import React, { useState, useEffect } from 'react';
import "./App.css";
import Axios from 'axios';
import TreeChart from './components/tree-Chart/tree-chart.component';
import Interface from './components/interface/interface.component';
import FormInputEdit from './components/form-input/form-input-edit.component';
import './app.styles.scss';
//import { inspect } from 'util';
//const util = require('util');

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
  }, []);

  /* Get factories */
  const getFactory = () => {
    console.log("get factory");
    Axios.get('https://pure-forest-64023.herokuapp.com/api/factories').then((response) => { 
      setFactoryList(response.data);
    });
  }

  /* Add Factory */
  const addFactory = () => {
    console.log(currentId);
    const newName = "New Factory";
    const newQty = 6;
    const newMin = 0;
    const newMax = 100;

    /* Set default for new factory */
    setName(newName);
    setQty(newQty);
    setMin(newMin);
    setMax(newMax);

    Axios.post('https://pure-forest-64023.herokuapp.com/create', {
      name: newName, 
      qty: newQty, 
      min: newMin, 
      max: newMax
    }).then((response) => { 
      const newId = response.data;
      setCurrentId(newId);
      getFactory();
    });
  }

  /* Delete factory */
  const deleteFactory = () => {
    Axios.delete(`https://pure-forest-64023.herokuapp.com/factories/${currentId}`);
    getFactory();
  }

  /* Update factory */
  const updateFactory = () => {
    Axios.put(`https://pure-forest-64023.herokuapp.com/factories/${currentId}`, 
    {
      name: name, 
      qty: qty, 
      min: min, 
      max: max
    }).then(() => { 
      getFactory();
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
    const factory = findFactory(id);
    setName(factory.name);
    setQty(factory.qty);
    setMin(factory.min);
    setMax(factory.max);
  }

  return (
      <div className="container">
        <div className ="factory-interface">
          <div className="factory-list">
            <TreeChart data = {factoryList} 
              selectedId = {value => {applyCurrentId(value)}} 
              selected = {"" + currentId}       
            />
          </div>
          <Interface 
              addFactory = {addFactory}
              deleteFactory = {deleteFactory}
          />
        </div>  
        <FormInputEdit 
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
  );
}

export default App;
