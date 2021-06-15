import React from 'react';
import './interface.styles.scss';
import '../form-input/form-input.styles.scss';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/AddCircleOutlineRounded';
import RefreshIcon from '@material-ui/icons/RefreshRounded';

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
}));

const Interface = ({ addFactory, deleteFactory, onRegenFactorySeed, selectedId }) => {
  const classes = useStyles();

  return(
    <div className="interface-card">

      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={<AddIcon />}
        onClick={addFactory}
        size="small"
      >
        Add
      </Button>
      
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        diabled={selectedId == "" ? true : false}
        startIcon={<DeleteIcon />}
        onClick={deleteFactory}
        size="small"
      >
        Delete
      </Button>

      <Button
            variant="contained"
            color="primary"
            size="small"
            className={classes.button}
            diabled={selectedId == "" ? true : false}
            startIcon={<RefreshIcon />}
            onClick={onRegenFactorySeed}
          >
            Regenerate
        </Button>
     
    </div>
  );
}

export default Interface;