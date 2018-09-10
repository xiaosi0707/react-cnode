/*
*wyunfei在2018/9/10创建了cnode项目文件topic-list.js
*/
import React, { Component } from 'react'
import ListItem from '../components/list-item'

class TopicList extends Component {
    render() {
        return (
            <div className="main">
                <div className="content">
                    <div className="header">
                        <a href=''>全部</a>
                        <a href=''>精华</a>
                        <a href=''>分享</a>
                        <a href=''>问答</a>
                        <a href=''>招聘</a>
                        <a href=''>客户端测试</a>
                    </div>
                    <ListItem></ListItem>
                    {/*<topic-list :topicListData="topicListData"></topic-list>*/}
            </div>
        <div class="aside">
            {/*<user-info user-name="xiaosi0707"></user-info>*/}
            {/*<div class="create-topic">*/}
                {/*<router-link to="/createTopic">发布话题</router-link>*/}
            {/*</div>*/}
            侧边栏
        </div>
    </div>
        )
    }
}

export default TopicList