/*
*wyunfei在2018/9/10创建了cnode项目文件index.js
*/
import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import TopicList from '../views/topic-list'
import Detail from '../views/detail'

class RouterIndex extends Component {
    render () {
        return (
            <Switch>
                <Route path='/' component={TopicList} exact></Route>
                <Route path='/detail/:id' component={Detail} exact></Route>
            </Switch>
        )
    }
}

export default RouterIndex