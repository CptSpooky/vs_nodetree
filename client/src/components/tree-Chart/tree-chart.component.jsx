import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';

const useStyles = makeStyles({
  root: {
    height: "auto",
    flexGrow: 1,
    maxWidth: 300,
  },
});

const generateNums = () => {
    var nums = [];
    for(let i = 0; i < 5; i++){
        nums.push(i);
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
            {generateNums().map((val, key) => {
                return(
                    <TreeItem key={key} nodeId={"" + val.id + "-" + 1} label={"val " + val}></TreeItem>
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