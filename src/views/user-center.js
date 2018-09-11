/*
*wyunfei在2018/9/11创建了cnode项目文件user-center.js
*/
import React, { Component } from 'react'

export default class UserCenter extends Component {
    render() {
        return (
            <div className="main">
                <div className="user-content">
                    <div className="user-info">
                        <div className="header"></div>
                        <div class="user-info-content">
                            <dl>
                                <dt>
                                    <img src="" alt="" />
                                </dt>
                                <dd>
                                    小四0707
                                </dd>
                            </dl>
                            <p>
                                积分： 12123
                            </p>
                            <p>
                                {/*<router-link :to="{ name:'collectionList', params: { userName: userCenterData.loginname } }">{{ collectionNum.length }}个话题收藏</router-link>*/}
                                123个话题收藏
                        </p>
                        <p>
                            <span>注册时间18:09;90</span>
                        </p>
                    </div>
                </div>
                <div className="new-create-topic">
                    <div className="header"><span>最近创建的话题</span></div>
                    {/*<topic-list :topicListData="userCenterData.recent_topics"></topic-list>*/}
            </div>
        <div className="new-create-topic">
            <div className="header"><span>最近参与的话题dsdsd</span></div>
            {/*<topic-list :topicListData="userCenterData.recent_replies"></topic-list>*/}
    </div>
    </div>
        <div className="aside">
            {/*<user-info :user-name="userCenterData.loginname"></user-info>*/}
        <div className="create-topic">
            {/*<router-link to="/createTopic">发布话题</router-link>*/}
            <a href="">发布话题</a>
        </div>
    </div>
    </div>
        )
    }
}