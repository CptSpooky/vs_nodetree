import React from 'react';
import './form-input.styles.scss';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/CloseRounded';

const FormInputAdd = ({ onChangeSetName, onChangeSetQty, onChangeSetMin, onChangeSetMax, updateFactory, name, qty, min, max }) => {
  return(
      <div id="popupedit" className="popup">
        <a className="close" href="/#">
          <IconButton aria-label="add">
            <CloseIcon fontSize="small" />
          </IconButton>
        </a>
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

export default FormInputAdd;