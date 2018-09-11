/*
*wyunfei在2018/9/10创建了cnode项目文件index.js
*/
import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import TopicList from '../views/topic-list'
import Detail from '../views/detail'
import CreateTopic from '../views/create-topic'

class RouterIndex extends Component {
    render () {
        return (
            <Switch>
                <Route path='/' component={TopicList} exact></Route>
                <Route path='/detail/:id' component={Detail} exact></Route>
                <Route path='/create-topic' component={CreateTopic} exact></Route>
            </Switch>
        )
    }
}

export default RouterIndex