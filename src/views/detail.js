/*
*wyunfei在2018/9/11创建了cnode项目文件detail.js
*/

import React, { Component } from 'react'
import Axios from 'axios'

export default class Detail extends Component{
    constructor(props) {
        super(props)
        this.state = {
            detailData: {}
        }
    }
    componentDidMount() {
        let { id } = this.props.match.params
        Axios.get('https://cnodejs.org/api/v1/topic/' + id).then(res => {
            let { data } = res.data
            this.setState({
                detailData: data
            })
        })
    }
    render() {
        let { detailData } = this.state
        return (
            <div className="main">
                <div className="content">
                    <div className="content-inner">
                        <div className="detail-title"><span>置顶</span>{detailData.title}</div>
                        <div className="title-msg">发布于8个月前·作者 { detailData.author.loginname } 123123 次浏览·最后一次编辑是 5
                            个月前·来自 分享
                            <a href="javascript:;">收藏</a>
                        <p>
                            {/*<a href="">编辑</a>*/}
                        <span href="javascript:;">删除</span>
                    </p>
                </div>
                <div className="detail-content" dangerouslySetInnerHTML = {{ __html:detailData.content }}></div>
            </div>
        <div className="detail-msg">
            <div className="header">
                <span>123 回复</span>
            </div>
            <div className="detail-msg-list">
                <dl v-for="(item,key,index) in detailData.replies">
                <dt>
                    <img src="" alt="" />
                </dt>
                <dd>
                    <p><span>小四</span><i>赞<em>1</em></i><em>回复</em></p>
            <p>嘻嘻</p>
        </dd>
        <p>
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <a href="javascript:;">回复</a>
    </p>
    </dl>
    </div>
    </div>
        <div className="detail-reply">
            <div className="header">
                <span>添加回复</span>
            </div>
            <div className="detail-reply-content">
                <textarea v-model="messageContent"></textarea>
            </div>
            <div className="sub-btn">
                <a href="javascript:;">回复</a>
        </div>
    </div>
    </div>
                {/*<user-info :user-name="detailData.author.loginname"></user-info>*/}
    </div>
        )
    }
}