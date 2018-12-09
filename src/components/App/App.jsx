import React, { Component } from 'react';
// import axios from 'axios';
import './App.css';
import Header from '../Header/Header';
import Feedback from '../Feedback/Feedback';
import ReFeedback from '../rFeedBack/rFeedBack';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <br/>
        <Feedback />
        <ReFeedback />
      </div>
    );
  }
}

export default App;
