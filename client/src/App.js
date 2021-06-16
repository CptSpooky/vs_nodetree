import React, { useState, useEffect } from 'react';
import "./App.css";
import Axios from 'axios';
import TreeChart from './components/tree-Chart/tree-chart.component';
import Interface from './components/interface/interface.component';
import FormInputEdit from './components/form-input/form-input-edit.component';
import { makeStyles } from '@material-ui/core/styles';
import BottomNav from '@material-ui/core/BottomNavigation';
import BottomNavAction from '@material-ui/core/BottomNavigationAction';
import './app.styles.scss';
//import { inspect } from 'util';
//const util = require('util');

const navStyles = makeStyles({
  root: {
    width: "100%",
    backgroundColor: "0c0223"
  }
});

function App() {
  const classes = navStyles();

  /* States */
  const [navValue, setNavValue] = useState(0);
  const [name, setName] = useState("");
  const [qty, setQty] = useState(0);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);

  const [currentId, setCurrentId] = useState("");

  /* Factory object */
  const [factoryList, setFactoryList] = useState([]);

  /* Get factories on initial load */
  useEffect(() => {
    rebuildFactoryList();
  }, []);

  /* Rebuild factory list */
  const rebuildFactoryList = () => {
    Axios.get('https://pure-forest-64023.herokuapp.com/factories').then((response) => { 
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
      rebuildFactoryList();
    });
  }

  /* Delete factory */
  const deleteFactory = () => {
    Axios.delete(`https://pure-forest-64023.herokuapp.com/factories/${currentId}`);
    setCurrentId("");
    rebuildFactoryList();
  }

  /* Update factory */
  const updateFactory = () => {
    let newName = name;
    if (newName == "") {
      newName = "Nameless Factory"
    }

    Axios.put(`https://pure-forest-64023.herokuapp.com/factories/${currentId}`, 
    {
      name: newName, 
      qty: qty, 
      min: min, 
      max: max
    }).then(() => { 
      rebuildFactoryList();
    });
  }

  /* Regen seed */
  const regenFactorySeed = () => {
    Axios.put(`https://pure-forest-64023.herokuapp.com/factories/regen/${currentId}`, {})
    .then(() => { 
      rebuildFactoryList();
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
    <>
    <div className="container">
      <div className ="groupContainer">
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
              onRegenFactorySeed = {regenFactorySeed}
              selectedId = {currentId}
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
          selectedId = {currentId}
        />
      </div>
    </div>
    <BottomNav
      value={navValue}
      onChange={(event, newValue) => {
        setNavValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <div className="name">Danielle Varela</div>
      <BottomNavAction label="GitHub" icon={<a className="fa fa-github" href="https://github.com/CptSpooky/vs_nodetree" />} />
    </BottomNav>
    </>
  );
}

export default App;
