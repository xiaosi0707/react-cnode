/*
*wyunfei在2018/9/13创建了cnode项目文件msg.js
*/
import React, { Component } from 'react'
import MsgList from '../components/msg-list'
import Axios from 'axios'
export default class Msg extends Component{
    constructor(props) {
        super(props)
        this.state = {
            hasNotReadMsg: [],
            hasReadMsg: []
        }
    }
    componentDidMount() {
        Axios.get('https://cnodejs.org/api/v1/messages', {
            params: {
                accesstoken: '29f4c9a1-2b49-4ec0-b5fc-2abfb4f3635f'
            }
        }).then(res => {
            let { hasnot_read_messages, has_read_messages } = res.data.data
            this.setState({
                hasNotReadMsg: hasnot_read_messages,
                hasReadMsg: has_read_messages
            })
        })
    }
    render() {
        let { hasNotReadMsg, hasReadMsg } = this.state
        return (
            <div className="main">
                <div className="content">
                    <div className="list">
                        <div className="header">
                            <span>新消息</span>
                        </div>
                        {
                            hasNotReadMsg.length ?
                            hasNotReadMsg.map((item, i) => {
                                return (
                                    <MsgList key={i} {...{...item}}></MsgList>
                                )
                            }) : <div className="cell"><p className="title">无消息</p></div>
                        }
                    </div>
                    <div className="list">
                        <div className="header">
                            <span>过往消息</span>
                        </div>
                        {/*<div className="cell"><p className="title">无消息</p></div>*/}
                        {
                            hasReadMsg.length ?
                            hasReadMsg.map((item, i) => {
                                return (
                                    <MsgList key={i} {...{...item}}></MsgList>
                                )
                            }) : <div className="cell"><p className="title">无消息</p></div>
                        }
                    </div>
    </div>
        <div className="aside">
            <user-info user-name="xiaosi0707"></user-info>
            <div className="create-topic">
                <a href=''>发布话题</a>
            </div>
        </div>
    </div>
        )
    }
}