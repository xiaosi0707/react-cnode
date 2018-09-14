import React, { Component } from 'react';
import CnodeRouter from './router/index'
import CHeader from './components/common/header'
import './assets/css/app.scss';
import ReactLoading from 'react-loading'

class App extends Component {
  render() {
    return (
      <div className="App">
          <CHeader></CHeader>
          <CnodeRouter></CnodeRouter>
          <ReactLoading type='balls' color='#80BD01' className='loading'></ReactLoading>
      </div>
    );
  }
}

export default App;
