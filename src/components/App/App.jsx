import React, { Component } from 'react';
// import axios from 'axios';
import './App.css';
import Header from '../Header/Header';
import Feedback from '../Feedback/Feedback';
import 'typeface-roboto';



class App extends Component {
  render() {
    return (
        <div className="App">
            <Header />
            <Feedback />
        </div>
    );
  }
}

export default App;
