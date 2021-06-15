import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
const seedrandom = require('seedrandom');

const useStyles = makeStyles({
  root: {
    height: "auto",
    flexGrow: 1,
    maxWidth: 300,
  },
});

/* Generate random nums */
const generateNums = (factory) => {
    /* Random number generator seed */
    let rng = seedrandom(factory.gentime);

    var nums = [];
    for(let i = 0; i < factory.qty; i++){
        nums.push(Math.floor(rng() * (factory.max - factory.min)) + factory.min);
    }
    return nums;
}

const TreeChart = ({data, selectedId, selected}) => {
  const classes = useStyles();
  if (typeof data === 'undefined') {return (<div></div>)}

  return(
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      selected={selected}
    >
    {data.map((val, key) => {
      return (
        <TreeItem key={key} nodeId={"" + val.id} label={val.name} onClick={()=> selectedId(val.id)}>
            {generateNums(val).map((val, key) => {
                return(
                    <TreeItem key={key} nodeId={"" + val.id + "-" + 1} label={"" + val}></TreeItem>
                );
            })}
        </TreeItem>
      );
      })
    }
    </TreeView>
  );
}

export default TreeChart;