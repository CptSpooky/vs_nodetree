import React from 'react';
import './form-input.styles.scss';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import CheckIcon from '@material-ui/icons/CheckCircleRounded';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  check: {
    color: "#0da8a4"
  }
}));

const FormInputAdd = ({ onChangeSetName, onChangeSetQty, onChangeSetMin, onChangeSetMax, updateFactory, name, qty, min, max, selectedId }) => {
  const classes = useStyles();

  if(selectedId == ""){
    return (
      <div id="popupedit" className="popup">
      <p>To edit a factory, select it from the tree.</p>
      </div>
    );
  }

  /* Validation conditions */
  let qtyValid = qty > 0 && qty <= 15;
  let nameValid = name.length >= 1 && name.length <= 30;
  let minValid = min > -100000000 && min < 100000000 && min !== "";
  let maxValid = min > -100000000 && max < 100000000 && min < max && max !== "";
  let allValid = qtyValid && nameValid && minValid && maxValid;

  return(
      <div id="popupedit" className="popup">
        <h2>Factory Settings</h2>
        <p>To edit a factory, select it from the tree and update its settings below.</p>
        <hr />
        
        <div className="form-input">
            <div className="label-cage">
              <label>Name</label>
              {nameValid ? "" : <div className="errMsg">invalid name</div>}
            </div>
            <input 
            type="text" 
            maxLength="30"
            value={name}
            className={nameValid ? "" : "err" }
            onChange={(e) => onChangeSetName(e.target.value)}
            />
            <div className="label-cage">
              <label>Qty</label>
              {qtyValid ? "" : <div className="errMsg">value out of range</div>}
            </div>
            <input type="number"
            min="1"
            max="15"
            value={qty}
            className={qtyValid ? "" : "err" }
            onChange={(e) => onChangeSetQty(e.target.value)}
            />
            <div className="label-cage">
              <label>Min</label>
              {minValid ? "" : <div className="errMsg">value out of range</div>}
            </div>
            <input type="number"
            min="-100000000"
            max="100000000"
            className={minValid ? "" : "err" }
            value={min}
            onChange={(e) => onChangeSetMin(e.target.value)}
            />
            <div className="label-cage">
              <label>Max</label>
              {maxValid ? "" : <div className="errMsg">value out of range</div>}
            </div>
            <input type="number"
              min="-100000000"
              max="100000000"
              className={maxValid ? "" : "err" }
              value={max}
              onChange={(e) => onChangeSetMax(e.target.value)}
            />
        </div>
        <div className="factory-setting-buttons">
          <Button
            variant="contained"
            color="primary"
            size="small"
            disabled={allValid ? false : true}
            className={classes.button}
            startIcon={<SaveIcon />}
            onClick={updateFactory}
          >
            Save
          </Button>
          <CheckIcon className={updateFactory ? setTimeout(()=>{return "visible"}, 500) : "hidden" } className={classes.check} />
        </div>
      </div>
  );
}

export default FormInputAdd;