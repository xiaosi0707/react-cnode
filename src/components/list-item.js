/*
*wyunfei在2018/9/10创建了cnode项目文件list-item.js
*/
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class List extends Component {
    constructor(props) {
        super(props);
        this.tagWhich = this.tagWhich.bind(this)
    }
    tagWhich() {
        let { tab, top, good } = this.props.dataItem
        if(top) {
            return '<i>置顶</i>'
        } else if (good) {
            return '<i>精华</i>'
        } else if (tab === 'ask') {
            return '<em>问答</em>'
        }  else if (tab === 'share') {
            return '<em>分享</em>'
        }  else if (tab === 'job') {
            return '<em>招聘</em>'
        }
    }
    render() {
        let { tagWhich } = this
        let { dataItem } = this.props
        return (
            <div className="list">
                <div className="cell">
                <p className="user-avatar">
                    <Link to={'/user-center/' + dataItem.author.loginname}>
                        <img src={ dataItem.author.avatar_url } alt="" />
                    </Link>
                    {/*<Link to={{ pathname: '/user-center' , query : { loginname: dataItem.author.loginname, visit_count: dataItem.visit_count, reply_count: dataItem.reply_count }}}>*/}
                        {/*<img src={ dataItem.author.avatar_url } alt="" />*/}
                    {/*</Link>*/}
                <span>{ dataItem.reply_count } / { dataItem.visit_count } </span>
                </p>
            <p className="title">
                <span dangerouslySetInnerHTML = {{ __html: tagWhich() }}></span>
                <Link to={'/detail/' + dataItem.id}>{ dataItem.title }</Link>
            </p>
            <p className="reply-avatar">
                <img src={ dataItem.author.avatar_url } alt="" />
                <time>3小时前</time>
            </p>
    </div>
    </div>
        )
    }

}