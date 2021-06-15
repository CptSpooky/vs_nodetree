import React from 'react';
import './form-input.styles.scss';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import RefreshIcon from '@material-ui/icons/RefreshRounded';
import SaveIcon from '@material-ui/icons/Save';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));


const FormInputAdd = ({ onChangeSetName, onChangeSetQty, onChangeSetMin, onChangeSetMax, updateFactory, name, qty, min, max, onRegenFactorySeed, selectedId }) => {
  const classes = useStyles();
  if(selectedId == ""){
    return (
      <div id="popupedit" className="popup">
      <p>To edit a factory, select it from the tree.</p>
      </div>
    );
  }

  let qtyValid = qty > 0 && qty <= 15;

  return(
      <div id="popupedit" className="popup">
        <h2>Factory Settings</h2>
        <p>To edit a factory, select it from the tree and update its settings below.</p>
        
        <div className="form-input">
            <label>Name:</label>
            <input 
            type="text" 
            value={name}
            onChange={(e) => onChangeSetName(e.target.value)}
            />
            <label>{qtyValid ? "Qty:" : "QtyX:" }</label>
            <input type="number"
            min="1"
            max="15"
            value={qty}
            onChange={(e) => onChangeSetQty(e.target.value)}
            />
            <label>Min:</label>
            <input type="number"
            min="-100000000"
            max="100000000"
            value={min}
            onChange={(e) => onChangeSetMin(e.target.value)}
            />
            <label>Max:</label>
            <input type="number"
              min="-100000000"
              max="100000000"
            value={max}
            onChange={(e) => onChangeSetMax(e.target.value)}
            />
        </div>
        <div className="factory-setting-buttons">
          <Button
            variant="contained"
            color="primary"
            size="small"
            className={classes.button}
            startIcon={<SaveIcon />}
            onClick={updateFactory}
          >
            Save
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="small"
            className={classes.button}
            startIcon={<RefreshIcon />}
            onClick={onRegenFactorySeed}
          >
            Regenerate
          </Button>
        </div>
      </div>
  );
}

export default FormInputAdd;