/*
*wyunfei在2018/9/10创建了cnode项目文件header.js
*/
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'

export default class CHeader extends Component {
    constructor(props) {
        super(props)
        this.state = {
            msgCount: 0
        }
    }
    componentDidMount() {
        Axios.get('https://cnodejs.org/api/v1/message/count', {
            params: {
                accesstoken: '29f4c9a1-2b49-4ec0-b5fc-2abfb4f3635f'
            }
        }).then(res => {
            let { data } = res.data

            this.setState({
                msgCount: data
            })
        })
    }
    render() {
        let { msgCount } = this.state
        return (
            <div className="navbar">
                <div className="navbar-inner">
                    <a className="logo" >
                        <img src="https://o4j806krb.qnssl.com/public/images/cnodejs_light.svg" alt="" />
                    </a>
                    <form className="search">
                        <input type="text" />
                            <img src="https://cnodejs.org/public/images/search.e53b380a.hashed.png" alt="" />
                    </form>
                    <nav className="nav">
                        <a href=''>首页</a>
                        <Link to='/msg'><span>{msgCount}</span>未读消息</Link>
                        <a href="">新手入门</a>
                        <a href="">API</a>
                        <a href="">关于</a>
                        <a href="">注册</a>
                        <a href="">登陆</a>
                    </nav>
                </div>
            </div>
        )
    }
}