/*
*wyunfei在2018/9/13创建了cnode项目文件msg-list.js
*/
import React, { Component } from 'react'
import Axios from 'axios'

export default class MsgList extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        // Axios.get('https://cnodejs.org/api/v1')
    }
    render() {
        let { msgTitle } = this.props
        return (
            <div className="list">
                <div className="header">
                    <span>{msgTitle}</span>
                </div>
                <div className="cell"><p className="title">无消息</p></div>
                <div className="cell">
                <p className="title">
                    <a href="">is-Fack </a><span>回复了你的话题</span><span>在话题</span> <a href="">ASDFasddfadsfasdf</a><span v-show="item.type === 'at'">中@了你</span>
    </p>
        <p className="reply-avatar">
            <time>3小时前</time>
        </p>
    </div>
    </div>
        )
    }
}