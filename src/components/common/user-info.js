/*
*wyunfei在2018/9/11创建了cnode项目文件user-info.js
*/
import React, { Component } from 'react'

export default class UserInfo extends Component {
    render() {
        return (
            <div className="sider">
                <div className="header">
                    <span>个人信息</span>
                </div>
                <div className="user-info">
                    <dl>
                        {/*<dt>
                            <router-link :to="{ name:'userCenter', params: { userName: userInfo.loginname } }">
                            <img :src="userInfo.avatar_url" alt="">
                        </router-link>
                    </dt>*/}
                    <dd>
                        小四
                    </dd>
                </dl>
                <p>
                    积分： 123
                </p>
                <p>
                    <i>“ 这家伙很懒，什么个性签名都没有留下。 ”
                    </i>
                </p>
            </div>
    </div>
        )
    }
}