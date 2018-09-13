/*
*wyunfei在2018/9/10创建了cnode项目文件header.js
*/
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class CHeader extends Component {
    render() {
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
                        <Link to='/msg'>未读消息</Link>
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