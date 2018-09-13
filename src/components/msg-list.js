/*
*wyunfei在2018/9/13创建了cnode项目文件msg-list.js
*/
import React, { Component } from 'react'


export default class MsgList extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        console.log(this.props)
        let { author, topic } = this.props
        return (
            <div className="cell">
                {
                    author ? <p className="title">
                        <a href="">{ author.loginname }</a><span>回复了你的话题</span><span>在话题</span> <a href="">{ topic.title }</a><span v-show="item.type === 'at'">中@了你</span>
                    </p> : ''
                }

                <p className="reply-avatar">
                    <time>3小时前</time>
                </p>
            </div>
        )
    }
}