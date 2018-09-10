import React, { Component } from 'react';
import CnodeRouter from './router/index'
import CHeader from './components/common/header'
import './assets/css/app.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
          <CHeader></CHeader>
          <CnodeRouter></CnodeRouter>
      </div>
    );
  }
}

export default App;
