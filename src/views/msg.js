/*
*wyunfei在2018/9/13创建了cnode项目文件msg.js
*/
import React, { Component } from 'react'
import MsgList from '../components/msg-list'
export default class Msg extends Component{
    render() {
        return (
            <div class="main">
                <div class="content">
                    <MsgList msgTitle='新消息'></MsgList>
                    <MsgList msgTitle='过往消息'></MsgList>
                    {/*<msg-list title="新消息"></msg-list>*/}
                {/*<msg-list title="过往信息"></msg-list>*/}
    </div>
        <div class="aside">
            <user-info user-name="xiaosi0707"></user-info>
            <div class="create-topic">
                <a href=''>发布话题</a>
            </div>
        </div>
    </div>
        )
    }
}