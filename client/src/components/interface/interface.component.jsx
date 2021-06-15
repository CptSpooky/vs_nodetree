import React from 'react';
import './interface.styles.scss';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/AddCircleOutlineRounded';
import SettingsIcon from '@material-ui/icons/BuildRounded';
import RefreshIcon from '@material-ui/icons/RefreshRounded';

const Interface = ({ addFactory, deleteFactory }) => {
  return(
    <div className="interface-card">
      <IconButton onClick={addFactory} aria-label="add">
        <AddIcon fontSize="large" />
      </IconButton>
      <IconButton onClick={deleteFactory} aria-label="delete">
        <DeleteIcon fontSize="large" />
      </IconButton>
      <IconButton aria-label="settings">
        <SettingsIcon fontSize="large" />
      </IconButton>
      <IconButton aria-label="refresh">
        <RefreshIcon fontSize="large" />
      </IconButton>
    </div>
  );
}

export default Interface;