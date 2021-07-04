import './App.css';
import React, {useRef, useEffect, useState, Fragment} from "react";
import MenuAppBar from './components/MenuAppBar.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home.js';
import Social from './pages/Social.js';
import MainApp from './pages/MainApp.js';
import Paper from '@material-ui/core/Paper';
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

function App() {
  return (
    <ThemeProvider>
      <Paper style={{ height:"100vh" }}>
      <Grid container direction="column">
          <Grid item>
            <Router>
              <MenuAppBar />
              <div>
                {/* A <Switch> looks through its children <Route>s and
                    renders the first one that matches the current URL. */}
                <Switch>
                  <Route path="/" exact component={Home} />
                  <Route path="/mainapp" exact component={MainApp} />
                  <Route path="/social" exact component={Social} />
                </Switch>
              </div>
            </Router>
          </Grid>
      </Grid>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
