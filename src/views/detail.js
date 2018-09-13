/*
*wyunfei在2018/9/11创建了cnode项目文件detail.js
*/

import React, { Component } from 'react'
import Axios from 'axios'

export default class Detail extends Component{
    constructor(props) {
        super(props)
        this.state = {
            detailData: {},
            contentDetail: ''
        }
        this.tabClassify = this.tabClassify.bind(this)
        this.replyWhich = this.replyWhich.bind(this)
        this.up = this.up.bind(this)
        this.getDetailData = this.getDetailData.bind(this)
        this.replyDetail = this.replyDetail.bind(this)
        this.getContentDetail = this.getContentDetail.bind(this)
        this.replyDetailOne = this.replyDetailOne.bind(this)
    }
    tabClassify() {
        let { tab } = this.state.detailData
        switch (tab) {
            case 'ask':
                return '问答'
            break;
            case 'share':
                return '分享'
            break;
            case 'job':
                return '招聘'
            break;
            case 'good':
                return '精华'
            break
            default:
                return '小四 - 原创'
        }
    }
    componentDidMount() {
        let { getDetailData } = this
        getDetailData()
    }
    // 请求数据
    getDetailData() {
        let { id } = this.props.match.params
        Axios.get('https://cnodejs.org/api/v1/topic/' + id, {
            params: {
                accesstoken: '89946f10-bc83-409b-a5dc-04c4b6fe39a1'
            }
        }).then(res => {
            let { data } = res.data
            this.setState({
                detailData: data,
                whichText: null
            })
        })
    }
    // 要回复哪一条评论
    replyWhich(index) {
        this.setState({
            whichText: index
        })
    }
    // 点赞
    up(item) {
        let { getDetailData } = this
        Axios.post('https://cnodejs.org/api/v1/reply/'+ item.id +'/ups', {
            accesstoken: '89946f10-bc83-409b-a5dc-04c4b6fe39a1'
        }).then(res => {
            let { success } = res.data
            if (success) getDetailData()
        })
    }
    // 回复
    replyDetail(topicId) {
        let { contentDetail } = this.state
        let { getDetailData } = this
       Axios.post('https://cnodejs.org/api/v1/topic/'+ topicId +'/replies', {
           accesstoken: '89946f10-bc83-409b-a5dc-04c4b6fe39a1',
           content: contentDetail
       }).then(res => {
           let { success } = res.data
           if (success) getDetailData()
           this.setState({
               contentDetail: ''
           })
       })
    }
    // 单条回复
    replyDetailOne(replyId) {
        console.log(1)
        // let { contentDetail } = this.state
        // let { getDetailData } = this
        // Axios.post('https://cnodejs.org/api/v1/topic/'+ replyId +'/replies', {
        //     accesstoken: '89946f10-bc83-409b-a5dc-04c4b6fe39a1',
        //     content: contentDetail,
        //     reply_id: replyId
        // }).then(res => {
        //     let { success } = res.data
        //     if (success) getDetailData()
        //     this.setState({
        //         contentDetail: ''
        //     })
        // })
    }
    // 获取content的值
    getContentDetail(ev) {
        ev.persist()
        let { value } = ev.target
        this.setState({
            contentDetail: value
        })
    }
    render() {
        let { tabClassify, replyWhich, up, replyDetail, getContentDetail, replyDetailOne } = this
        let { detailData, whichText} = this.state
        return (
            <div className="main">
                <div className="content">
                    <div className="content-inner">
                        <div className="detail-title"><span>置顶</span>{detailData.title}</div>
                        {
                            detailData.author ? (<div className="title-msg">发布于8个月前·作者 { detailData.author.loginname } {detailData.visit_count} 次浏览·最后一次编辑是 5
                                个月前·来自 {tabClassify()}
                                <a href="javascript:;">收藏</a>
                                <p>
                                    {/*<a href="">编辑</a>*/}
                                    <span href="javascript:;">删除</span>
                                </p>
                            </div>) : ''
                        }
                <div className="detail-content" dangerouslySetInnerHTML = {{ __html:detailData.content }}></div>
            </div>
        <div className="detail-msg">
            <div className="header">
                <span>123 回复</span>
            </div>
            <div className="detail-msg-list">
                {
                    detailData.replies ? detailData.replies.map((item, i) => {
                        return (
                            <dl key={i}>
                                <dt>
                                    <img src={item.author.avatar_url} alt="" />
                                </dt>
                                <dd>
                                    <p><span>{item.author.loginname}</span>
                                        <i onClick={() => up(item)}>赞<em>{item.ups.length}</em></i>
                                        <em onClick={() => replyWhich(i)}>回复</em></p>
                                    <p dangerouslySetInnerHTML = {{ __html:item.content }}></p>
                                </dd>
                                {
                                    i === whichText ?  (
                                        <p>
                                            <textarea name="" id="" cols="30" rows="10" onChange={getContentDetail}></textarea>
                                            <a href="javascript:;">回复</a>
                                        </p>
                                    ) : ''
                                }

                            </dl>
                        )
                    }) : ''
                }
            </div>
    </div>
        <div className="detail-reply">
            <div className="header">
                <span>添加回复</span>
            </div>
            <div className="detail-reply-content">
                <textarea name="" cols="30" rows="10" onChange={getContentDetail}></textarea>
            </div>
            <div className="sub-btn">
                <a href="javascript:;" onClick={() => {replyDetail(detailData.id)}}>回复</a>
        </div>
    </div>
    </div>
                {/*<user-info :user-name="detailData.author.loginname"></user-info>*/}
    </div>
        )
    }
}