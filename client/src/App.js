import React, { useState, useEffect } from 'react';
import "./App.css";
import Axios from 'axios';
import TreeChart from './components/tree-Chart/tree-chart.component';
import Interface from './components/interface/interface.component';
import FormInputAdd from './components/form-input/form-input-add.component';
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

  /* Delete factory */
  const deleteFactory = () => {
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
    const factory = findFactory(id);
    setName(factory.name);
    setQty(factory.qty);
    setMin(factory.min);
    setMax(factory.max);
  }

  return (
      <div className="container">
        <Interface 
          deleteFactory = {deleteFactory}
        />
        <TreeChart data = {factoryList} 
        selectedId = {value => {applyCurrentId(value)}}        
        />
        <FormInputAdd 
          addFactory = {addFactory}
          onChangeSetName = {value => setName(value)}
          onChangeSetQty = {value => setQty(value)}
          onChangeSetMin = {value => setMin(value)}
          onChangeSetMax = {value => setMax(value)}
        />
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
