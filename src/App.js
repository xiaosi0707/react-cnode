import React, { Component } from 'react';
import CnodeRouter from './router/index'
import CHeader from './components/common/header'
import './assets/css/app.scss';
import ReactLoading from 'react-loading'
import Axios from 'axios'

class App extends Component {
  constructor(props) {
      super()
      this.state = {
          isLoading: true
      }
  }
  render() {
      let { isLoading } = this.state
      Axios.interceptors.request.use(function (config) {
          // 在发送请求之前做些什么
          config.loading = isLoading
          return config;
      }, function (error) {
          // 对请求错误做些什么
          return Promise.reject(error);
      });
      Axios.interceptors.response.use( (response) => {
          // 对响应数据做点什么
          console.log(response)
          this.setState({
              isLoading: false
          })
          return response;
      }, function (error) {
          // 对响应错误做点什么
          return Promise.reject(error);
      });
    return (
      <div className="App">
          <CHeader></CHeader>
          <CnodeRouter></CnodeRouter>
          {
              isLoading ? <ReactLoading type='balls' color='#80BD01' className='loading'></ReactLoading> : ''
          }
      </div>
    );
  }
}


export default App;
