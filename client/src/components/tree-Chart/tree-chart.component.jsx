import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';

const useStyles = makeStyles({
  root: {
    height: 240,
    flexGrow: 1,
    maxWidth: 400,
  },
});

const TreeChart = ({data, selectedId}) => {
  const classes = useStyles();
  if (typeof data === 'undefined') {return (<div></div>)}

  return(
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
    >
    {data.map((val, key) => {
      return (
        <TreeItem key={key} nodeId={"" + val.id} label={val.name} onClick={()=> selectedId(val.id)}>
          <TreeItem nodeId={"" + val.id + "-" + 1} label="test"></TreeItem>
        </TreeItem>
      );
      })
    }
    </TreeView>
  );
}

export default TreeChart;