/*
*wyunfei在2018/9/10创建了cnode项目文件topic-list.js
*/
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ListItem from '../components/list-item'
import UserInfo from '../components/common/user-info'
import Axios from 'axios'

class TopicList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataList: []
        }
    }
    componentDidMount() {
        console.log(this.props)
        Axios.get('https://cnodejs.org/api/v1/topics', {
            params: {
                tab: 'all'
            }
        }).then(res => {
            let { data } = res.data
            this.setState({
                dataList: data
            })
        })
    }
    componentWillReceiveProps() {
        return true
    }
    render() {
        let { dataList } = this.state
        return (
            <div className="main">
                <div className="content">
                    <div className="header">
                        <Link to='/?tab=all'>全部</Link>
                        <Link to='/?tab=good'>精华</Link>
                        <Link to='/?tab=share'>分享</Link>
                        <Link to='/?tab=ask'>问答</Link>
                        <Link to='/?tab=job'>招聘</Link>
                        <Link to='/?tab=dev'>客户端测试</Link>
                    </div>
                    {
                        dataList.map((item, i) => {
                            return (
                                <ListItem key={i} dataItem={item}></ListItem>
                            )
                        })
                    }

                    {/*<topic-list :topicListData="topicListData"></topic-list>*/}
            </div>
        <div className="aside">
            <UserInfo></UserInfo>
            <div class="create-topic">
                <Link to="/create-topic">发布话题</Link>
            </div>
        </div>
    </div>
        )
    }
}

export default TopicList