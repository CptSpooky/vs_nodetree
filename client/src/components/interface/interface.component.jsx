import React from 'react';
import './interface.styles.scss';
import '../form-input/form-input.styles.scss';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/AddCircleOutlineRounded';
import SettingsIcon from '@material-ui/icons/BuildRounded';
import RefreshIcon from '@material-ui/icons/RefreshRounded';

const Interface = ({ deleteFactory }) => {
  return(
    <div className="interface-card">
      <a href="#popupadd">
        <IconButton aria-label="add">
            <AddIcon fontSize="large" />
        </IconButton>
      </a>
      <IconButton onClick={deleteFactory} aria-label="delete">
        <DeleteIcon fontSize="large" />
      </IconButton>
      <a href="#popupedit">
        <IconButton aria-label="settings">
            <SettingsIcon fontSize="large" />
        </IconButton>
      </a>
      <IconButton aria-label="refresh">
        <RefreshIcon fontSize="large" />
      </IconButton>
    </div>
  );
}

export default Interface;