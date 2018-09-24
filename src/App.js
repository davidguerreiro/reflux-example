import React from 'react';
import Reflux from 'reflux';
import './App.css';
import AppStore from './stores/AppStore';
import Actions from './actions/Actions';

class App extends Reflux.Component {
  constructor(props) {
    super(props);
    
    this.state = {};
    this.store = AppStore;

    this.storeKeys = ['count'];
  }
  render() {
    return (
      <div className="App">
        <h1>Contador</h1>
        <label className="App-label">{this.state.count}</label>
        <button onClick={() => { Actions.addOne(); } }>Add</button>
        <button onClick={() => { Actions.minusOne(); } }>Deduct</button>
      </div>
    );
  }
}

export default App;
