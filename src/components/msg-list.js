/*
*wyunfei在2018/9/13创建了cnode项目文件msg-list.js
*/
import React, { Component } from 'react'

export default class MsgList extends Component {
    render() {
        return (
            <div className="list">
                <div className="header">
                    <span>消息</span>
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