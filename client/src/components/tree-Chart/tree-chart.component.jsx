import React from 'react';
import './tree-chart.styles.scss';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import Dice from '@material-ui/icons/CasinoOutlined';
import MainIcon from '@material-ui/icons/CenterFocusStrongOutlined';
const seedrandom = require('seedrandom');

const useStyles = makeStyles({
  root: {
    height: "auto",
    flexGrow: 1,
    margin: "1em",
    color: "white",
    "&.MuiTreeItem-root.Mui-selected > .MuiTreeItem-content .MuiTreeItem-label": {
        backgroundColor: "rgba(216,1,105,.7) !important",
        background: "rgba(216,1,105,.7) !important",
        color: "rgba(216,1,105,.7) !important"
      }
  },
});

const iconStyles = makeStyles({
    root: {
      marginRight: "5px"
    },
  });

/* Generate an integer between min (inclusive) and max (inclusive) */
const randBetween = (rng, min, max) => {
    return Math.floor(rng() * (max - min + 1)) + min;
}

/* Generate random nums */
const generateNums = (factory) => {
    /* Random number generator seed */
    let rng = seedrandom(factory.gentime);

    var nums = [];
    for(let i = 0; i < factory.qty; i++){
        nums.push(randBetween(rng, factory.min, factory.max));
    }
    return nums;
}

const TreeChart = ({data, selectedId, selected}) => {
  const classes = useStyles();
  const iconClasses = iconStyles();
  if (typeof data === 'undefined') {return (<div></div>)}

  return(
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      selected={selected}
    >
        <TreeItem label={<div className="d-flex"><MainIcon className={iconClasses.root} />Main</div>} nodeId="main">
            {data.map((val, key) => {
            return (
                <TreeItem key={key} nodeId={"" + val.id} label={<div className="d-flex"><Dice className={iconClasses.root}/>{val.name}</div>} onClick={()=> selectedId(val.id)}>
                    {generateNums(val).map((val, key) => {
                        return(
                            <TreeItem key={key} nodeId={"" + val.id + "-" + 1} label={"" + val}></TreeItem>
                        );
                    })}
                </TreeItem>
            );
            })
            }
        </TreeItem>
    </TreeView>
  );
}

export default TreeChart;