import React, { Component } from 'react';

import './App.css';


import Main from './Main'

class App extends Component {
  constructor() {
    super()

    this.state = {
      notes: {
        'notes-1': {
          id: 'note-1',
          title: 'Thoughts on React',
          body: 'React is pretty nifty.'
        },
        'note-2': {
          id: 'note-2',
          title: 'State and Props?',
          body: 'Wat.',
        },
        'note-317': {
          id: 'note-3',
          title: 'naptown',
          body: 'stand up',
        }
      },
    }

  }


  render() {
    return (
      <div className="App">
        <Main notes={this.state.notes} />
      </div>
    );
  }
}

export default App;
