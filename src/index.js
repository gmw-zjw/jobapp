import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import {
    BrowserRouter,
    Route,
    Redirect
} from 'react-router-dom'
import AuthRouter from './conponent/authroute/AuthRoute'
import Login from './container/login/Login';
import Register from './container/register/Register';
import reducers from './reducer';
import './config'
import './index.css'

// 创建store
const store = createStore(reducers, compose(
    applyMiddleware(thunk),
    window.devToolsExtension?window.devToolsExtension():f=>f
))

function Boos() {
    return <h2>我是boos页面</h2>
}

function render() {
    ReactDOM.render(
        (<Provider store={store}>
            <BrowserRouter>
                <div>
                    {/* <AuthRouter />
                    <Boos></Boos> */}
                    {/* <Redirect to="/login"></Redirect> */}
                    <Route path="/login" component={Login}></Route>
                    <Route path="/register" component={Register}></Route>
                </div>                
            </BrowserRouter>
        </Provider>),
        document.getElementById('root'))
}
render()

store.subscribe(render)