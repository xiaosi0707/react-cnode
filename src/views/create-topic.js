/*
*wyunfei在2018/9/11创建了cnode项目文件create-topic.js
*/
import React, { Component } from 'react'
import Axios from 'axios'
import UpdateTitle from '../components/common/title'
export default class CreateTopic extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectVal: '',
            title: '',
            content: ''
        }
        this.createTopic = this.createTopic.bind(this)
        this.getSelect = this.getSelect.bind(this)
        this.getTitle = this.getTitle.bind(this)
        this.getContent = this.getContent.bind(this)
    }
    getSelect(ev) {
        let value = ev.target.value
        this.setState({
            selectVal: value
        })
    }
    getTitle(ev) {
        let value = ev.target.value
        this.setState({
            title: value
        })
    }
    getContent(ev) {
        let value = ev.target.value
        this.setState({
            content: value
        })
    }
    createTopic() {
        let { selectVal, title, content } = this.state
        Axios.post('https://cnodejs.org/api/v1/topics', {
            accesstoken: '89946f10-bc83-409b-a5dc-04c4b6fe39a1',
            title: title,
            tab: selectVal,
            content: content
        }).then(res => {
            if (res.data.success) {
                alert('发布成功')
                this.props.history.push('/')
            }
        })
    }
    componentDidMount() {

    }
    render() {
        // if (this.props.location.query) {
        //     let { tab, title, content } = this.props.location.query.topicData
        // }
        let { tab, title, content } = this.props.location.query.topicData
        let { createTopic, getSelect, getTitle, getContent } = this
        return (
            <UpdateTitle title='cnode社区 - 发布话题'>
            <div className="main">
                <div className="content">
                    <div className="header">
                        <a href="">主页 / 发布话题</a>
                    </div>
                    <div className="create-form">
                        <ul>
                            <li>
                                <span>选择版块</span>
                                <select name="" id="" onChange={getSelect} >
                                    <option value="">请选择</option>
                                    <option value='ask'>问答</option>
                                    <option value='share'>分享</option>
                                    <option value='job'>招聘</option>
                                    <option value='good'>精华</option>
                                    <option value='dev'>客户端测试</option>
                                </select>
                            </li>
                            <li>
                                <input type="text" placeholder="标题字数10字以上" onChange={getTitle} value={title}/>
                            </li>
                            <li>
                                <textarea name="" cols="30" rows="10" onChange={getContent} ></textarea>
                            </li>
                            <li className="sub-btn">
                                <a href="javascript:;" onClick={createTopic}>提交</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            </UpdateTitle>
        )
    }
}
