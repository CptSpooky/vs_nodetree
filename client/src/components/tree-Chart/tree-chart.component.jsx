import React, { useContext } from 'react';
import ThemeContext from '../../App';
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



// {factoryList.map((val, key) => {
//     console.log("VAL: " + JSON.stringify(val));
//     return (
//       <div className="card" tabIndex="-1" key={key}>
//         <p>{val.name}</p>
//         <p>{val.qty}</p>
//         <p>{val.min}</p>
//         <p>{val.max}</p>
//         <button>Edit</button>
//         <button onClick={() =>{deleteFactory(val.id)}}>Delete</button>

//       </div>
    
//     );
//   })}

const TreeChart = ({data, selectedId}) => {
  const classes = useStyles();
  if (typeof data === 'undefined') {return (<div></div>)}
  console.log("FFFFFFFFFF:   " + JSON.stringify(data));


  return(
        
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
    >
    {data.map((val, key) => {
        console.log("VAL ID: //////////// " + val.id);
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