/*
*wyunfei在2018/9/13创建了cnode项目文件edit-topic.js
*/
import React,{ Component } from 'react'
import Axios from 'axios'
import UpdateTitle from '../components/common/title'

export default class CreateTopic extends Component {
    constructor(props) {
        super(props)
        let { tab, title, content, id } = this.props.location.query.topicData
        this.state = {
            title,
            content,
            tab,
            id
        }
        this.topicUpdate = this.topicUpdate.bind(this)
        this.updateTitle = this.updateTitle.bind(this)
        this.updateContent = this.updateContent.bind(this)
        this.updateTab = this.updateTab.bind(this)
    }
    componentDidMount() {
        // console.log(this.props)
    }
    updateTitle(ev) {
        let value = ev.target.value
        this.setState({
            title: value
        })
    }
    updateContent(ev) {
        let value = ev.target.value
        this.setState({
            content: value
        })
    }
    updateTab(ev) {
        ev.persist()
        let value = ev.target.value
        this.setState({
            tab: value
        })
    }
    topicUpdate() {
        let { tab, title, content, id } = this.state
        Axios.post('https://cnodejs.org/api/v1/topics/update', {
            accesstoken: '29f4c9a1-2b49-4ec0-b5fc-2abfb4f3635f',
            topic_id: id,
            title,
            content,
            tab
        }).then(res => {
            let { success } = res.data
            if (success) this.props.history.push('/detail/' + id)
        })
    }
    render() {
        let { topicUpdate, updateTitle, updateContent, updateTab } = this
        let { title, content, tab } = this.state
        let arr = [
            {
                value: 'share',
                text: '分享'
            },
            {
                value: 'ask',
                text: '问答'
            },
            {
                value: 'job',
                text: '招聘'
            },
            {
                value: 'dev',
                text: '客户端测试'
            }
        ]
        return (
            <UpdateTitle title='cnode社区 - 编辑话题'>
            <div className="main">
                <div className="content">
                    <div className="header">
                        <a href="">主页 / 发布话题</a>
                    </div>
                    <div className="create-form">
                        <ul>
                            <li>
                                <span>选择版块</span>
                                <select name="" id="" onChange={ updateTab }>
                                    {
                                        arr.map((item, i) => (
                                            <option key={i} value={item.value} selected={ item.value === tab }>{item.text}</option>
                                        ))
                                    }
                                    <option value="">请选择</option>
                                </select>
                            </li>
                            <li>
                                <input type="text" placeholder="标题字数10字以上" value={title} onChange={updateTitle}/>
                            </li>
                            <li>
                                <textarea name="" cols="30" rows="10"  value={content} onChange={updateContent}></textarea>
                            </li>
                            <li className="sub-btn">
                                <a href="javascript:;" onClick={ topicUpdate }>提交</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            </UpdateTitle>
        )
    }
}