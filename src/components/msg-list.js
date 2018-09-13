/*
*wyunfei在2018/9/13创建了cnode项目文件msg-list.js
*/
import React, { Component } from 'react'


export default class MsgList extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        let { author, topic, type } = this.props
        console.log(topic)
        return (
            <div className="cell">
                {
                   // author && type === 'reply' ? <p className="title">
                   //     <a href="">{ author.loginname }</a><span>回复了你的话题</span>
                   // </p> : ( author && type === 'at' ?  <p className="title">
                   //     <a href="">{ author.loginname }</a><span>在话题</span><a href="">{topic}</a>中@了你
                   // </p> : '')
                    author && type === 'reply' ?
                        <p className="title">
                            <a href="">{ author.loginname }</a><span>回复了你的话题<a href=''>{topic.title}</a></span>
                        </p> : (type === 'at' ?  <p className="title">
                            <a href="">{ author.loginname }</a><span>在话题</span><a href="">{topic.title}</a>中@了你
                        </p> : 'hi')
                }

                <p className="reply-avatar">
                    <time>3小时前</time>
                </p>
            </div>
        )
    }
}