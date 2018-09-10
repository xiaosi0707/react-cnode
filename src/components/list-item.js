/*
*wyunfei在2018/9/10创建了cnode项目文件list-item.js
*/
import React, { Component } from 'react'

export default class List extends Component {
    render() {
        return (
            <div className="list">
                <div className="cell">
                <p className="user-avatar">
                    <a href=''>
                    <img src="" alt="" />
                </a>
                <span>100 / 100008 </span>
            </p>
        <p className="title">
            {/*<i v-if="item.top">置顶</i>*/}
            {/*<i v-show="!item.top && item.good">精华</i>*/}
            {/*<em v-show="!item.top && item.tab === 'share'">分享</em>*/}
            {/*<em v-show="item.tab === 'ask'">问答</em>*/}
            {/*<em v-show="item.tab === 'job'">招聘</em>*/}
            <a href=''>i奥体</a>
    </p>
        <p className="reply-avatar">
            <img src="" alt="" />
            <time>3小时前</time>
        </p>
    </div>
    </div>
        )
    }
}