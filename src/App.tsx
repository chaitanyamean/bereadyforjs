import React from 'react';
import List from './components/Dashboard/List';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SideDrawer from './shared/SideDrawer';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }),
);


function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
     <SideDrawer />

    </div>
  );
}

export default App;
