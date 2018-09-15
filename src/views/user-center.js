/*
*wyunfei在2018/9/11创建了cnode项目文件user-center.js
*/
import React, { Component } from 'react'
import ListItem from '../components/list-item'
import Axios from 'axios'
import UpdateTitle from '../components/common/title'

export default class UserCenter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userInfo: {}
        }
    }
    componentDidMount() {
        let { loginname } = this.props.match.params
        Axios.get('https://cnodejs.org/api/v1/user/' + loginname).then(res => {
            let { data } = res.data
            this.setState({
                userInfo: data
            })
        })
    }
    render() {
        let { userInfo } = this.state
        console.log(userInfo.recent_topics)
        return (
            <UpdateTitle title={'cnode社区 - 用户 - ' + userInfo.loginname}>
            <div className="main">
                <div className="user-content">
                    <div className="user-info">
                        <div className="header"></div>
                        <div className="user-info-content">
                            <dl>
                                <dt>
                                    <img src={userInfo.avatar_url} alt="" />
                                </dt>
                                <dd>
                                    {userInfo.loginname}
                                </dd>
                            </dl>
                            <p>
                                积分： {userInfo.score}
                            </p>
                            <p>
                                {/*<router-link :to="{ name:'collectionList', params: { userName: userCenterData.loginname } }">{{ collectionNum.length }}个话题收藏</router-link>*/}
                                123个话题收藏
                        </p>
                        <p>
                            <span>注册时间{ userInfo.create_at }</span>
                        </p>
                    </div>
                </div>
                    {
                        userInfo.recent_topics ? (
                            <div className="new-create-topic">
                                <div className="header"><span>最近创建的话题</span></div>
                                {
                                    userInfo.recent_topics.map((item, i) => {
                                        return <ListItem key={i} dataItem={item}></ListItem>
                                    })
                                }
                            </div>
                        ) : ''
                    }
            {
                userInfo.recent_topics ? (
                    <div className="new-create-topic">
                        <div className="header"><span>最近参与的话题</span></div>
                        {
                            userInfo.recent_replies.map((item, i) => {
                                return <ListItem key={i} dataItem={item}></ListItem>
                            })
                        }
                    </div>
                ) : ''
            }
    </div>
        <div className="aside">
            {/*<user-info :user-name="userCenterData.loginname"></user-info>*/}
        <div className="create-topic">
            {/*<router-link to="/createTopic">发布话题</router-link>*/}
            <a href="">发布话题</a>
        </div>
    </div>
    </div>
            </UpdateTitle>
        )
    }
}