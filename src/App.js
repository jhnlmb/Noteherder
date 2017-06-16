import React, { Component } from 'react';

import './App.css';
import Sidebar from './Sidebar.js'
import Notelist from './Notelist.js'
import Noteform from './Noteform.js'

class App extends Component {
  render() {
    return (
      <div className="App">
       <Sidebar />
       <Notelist />
       <Noteform />
      </div>
    );
  }
}

export default App;
