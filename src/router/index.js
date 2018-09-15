/*
*wyunfei在2018/9/10创建了cnode项目文件index.js
*/
import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import TopicList from '../views/topic-list'
import Detail from '../views/detail'
import CreateTopic from '../views/create-topic'
import UserCenter from '../views/user-center'
import Msg from '../views/msg'
import EditTopic from '../views/edit-topic'

class RouterIndex extends Component {
    render () {
        return (
            <Switch>
                <Route path='/' component={TopicList} exact onEnter={()=>{document.title="这是title名称"}}></Route>
                <Route path='/detail/:id' component={Detail} exact></Route>
                <Route path='/create-topic' component={CreateTopic} exact></Route>
                <Route path='/user-center/:loginname' component={UserCenter} exact></Route>
                <Route path='/msg' component={Msg} exact></Route>
                <Route path='/edit-topic' component={EditTopic} exact></Route>
            </Switch>
        )
    }
}

export default RouterIndex