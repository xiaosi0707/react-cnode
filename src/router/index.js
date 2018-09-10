/*
*wyunfei在2018/9/10创建了cnode项目文件index.js
*/
import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import TopicList from '../views/topic-list'

class RouterIndex extends Component {
    render () {
        return (
            <Switch>
                <Route path='/' component={TopicList}></Route>
            </Switch>
        )
    }
}

export default RouterIndex