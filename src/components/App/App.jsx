import React, { Component } from 'react';
// import axios from 'axios';
import './App.css';
import Header from '../Header/Header';
import Feedback from '../Feedback/Feedback';
import ReFeedback from '../rFeedBack/rFeedBack';
import Grid from '@material-ui/core/Grid';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Header />
          </Grid>
          <Grid item xs={8}>
            <Feedback />
          </Grid>
          <Grid item xs={4}>
            <ReFeedback />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
