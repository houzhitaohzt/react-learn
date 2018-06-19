/**
 * @author: houzhitao
 * @since: 2018-05-30 16:52
 */
import React from 'react';
import { renderRoutes } from "./renderRoutes";
import { BrowserRouter, Router, Route } from 'react-router-dom';
import { asyncComponent } from "./AsyncComponent";
import WebData from '../util/common/WebData';

//NotFound 未找到
const NotFound = asyncComponent(() => import('../screens/NotFound'));
//未登录首页的Layout 样式组件
const HeaderLayout = asyncComponent(() => import('../layout/HeaderLayout/HeaderLayout'));
//未登录之前首页
const IndexHome = asyncComponent(() => import('../screens/IndexHome'));
//考核标准
const IndexAssess = asyncComponent(() => import('../screens/IndexAssess'));
//常见问题
const IndexQuestion = asyncComponent(() => import('../screens/IndexQuestion'));
//入驻申请
const FacilitatorEnter = asyncComponent(() => import('../screens/FacilitatorEnter'));
//登录页面
const Login = asyncComponent(() => import('../screens/Login'));

//登录之后首页 当没有登录时，对url做重定向到 login 页面
const Home = asyncComponent(() => import('../screens/Home'), () => {
    if(!WebData.md5Token) {
        WebData.loginOut();
        return window.location.href='/login';
    }
});

const routes = [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
      path: '/login',
      exact: true,
      component: Login
    },
    {
        path: '/index',
        component: HeaderLayout,
        routes: [
            {
                path: '/index/home',
                exact: true,
                component: IndexHome
            },
            {
                path: '/index/assess',
                exact: true,
                component: IndexAssess
            },
            {
                path: '/index/question',
                exact: true,
                component: IndexQuestion
            },
            {
                path: '/index/facilitatorEnter',
                exact: true,
                component: FacilitatorEnter
            }
        ]
    },
    {
        path: '*',
        exact: true,
        component: NotFound
    }
];

export default class extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        return (<Router history={this.props.history}>
                {renderRoutes(routes)}
        </Router>)
    }
}



