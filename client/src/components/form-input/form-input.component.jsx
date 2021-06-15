import React from 'react';
import './form-input.styles.scss';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/CloseRounded';

const FormInput = ({ onChangeSetName, onChangeSetQty, onChangeSetMin, onChangeSetMax, updateFactory, currentId, factoryList, name, qty, min, max }) => {
    // console.log(currentId);
    // console.log(factoryList);
    // let currentFactory = null;
    // for(let i = 0; i < factoryList.length; i++){
    //     if(factoryList[i].id === currentId){
    //         currentFactory = factoryList[i];
    //         break;
    //     }
    // }
    console.log("LLLLLLLLLLLLL: " + name);

  return(
      <div className="form-box">
        <IconButton aria-label="add">
          <CloseIcon fontSize="large" />
        </IconButton>
        <div className="form-input">
            <label>Name:</label>
            <input 
            type="text" 
            value={name}
            onChange={(e) => onChangeSetName(e.target.value)}
            />
            <label>Qty:</label>
            <input type="number"
            value={qty}
            onChange={(e) => onChangeSetQty(e.target.value)}
            />
            <label>Min:</label>
            <input type="number"
            value={min}
            onChange={(e) => onChangeSetMin(e.target.value)}
            />
            <label>Max:</label>
            <input type="number"
            value={max}
            onChange={(e) => onChangeSetMax(e.target.value)}
            />
        </div>
        <button onClick={updateFactory}>Update Factory</button>
      </div>
  );
}

export default FormInput;