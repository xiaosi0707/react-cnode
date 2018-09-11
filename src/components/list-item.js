/*
*wyunfei在2018/9/10创建了cnode项目文件list-item.js
*/
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class List extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let { dataItem } = this.props
        return (
            <div className="list">
                <div className="cell">
                <p className="user-avatar">
                    <a href=''>
                        <img src={ dataItem.author.avatar_url } alt="" />
                    </a>
                <span>{ dataItem.reply_count } / { dataItem.visit_count } </span>
                </p>
            <p className="title">
                {/*<i v-if="item.top">置顶</i>*/}
                {/*<i v-show="!item.top && item.good">精华</i>*/}
                {/*<em v-show="!item.top && item.tab === 'share'">分享</em>*/}
                {/*<em v-show="item.tab === 'ask'">问答</em>*/}
                {/*<em v-show="item.tab === 'job'">招聘</em>*/}
                <Link to='/detail'>{ dataItem.title }</Link>
            </p>
            <p className="reply-avatar">
                <img src={ dataItem.author.avatar_url } alt="" />
                <time>3小时前</time>
            </p>
    </div>
    </div>
        )
    }

}