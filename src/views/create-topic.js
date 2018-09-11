/*
*wyunfei在2018/9/11创建了cnode项目文件create-topic.js
*/
import React, { Component } from 'react'
export default class CreateTopic extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="main">
                <div className="content">
                    <div className="header">
                        <a href="">哈哈</a>
                    </div>
                    <div className="create-form">
                        <ul>
                            <li>
                                <span>选择版块dev</span>
                                <select name="" id="" >
                                    <option value="">请选择</option>
                                    <option>问答</option>
                                </select>
                            </li>
                            <li>
                                <input type="text" placeholder="标题字数10字以上" />
                            </li>
                            <li>
                                <textarea name="" cols="30" rows="10"></textarea>
                            </li>
                            <li className="sub-btn">
                                <a href="javascript:;">提交</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
