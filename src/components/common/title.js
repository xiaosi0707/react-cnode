/*
*wyunfei在2018/9/15创建了cnode项目文件title.js
*/
import React, { Component } from 'react'

export default class ReactDocumentTitle extends Component {
    setTitle() {
        const { title } = this.props
        document.title = title
    }
    componentDidMount() {
        this.setTitle()
    }
    componentDidUpdate() {
        this.setTitle()
    }
    render() {
        return React.Children.only(this.props.children)
    }
}