/**
 * @author: houzhitao
 * @since: 2018-05-30 11:20
 */

import 'babel-polyfill';
import 'es5-shim';
import 'es6-promise';
import 'fetch-detector';
import 'fetch-ie8';
import React, { Component } from 'react';
import { render, unmountComponentAtNode  } from 'react-dom';

//router
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import createBrowserHistory from 'history/createBrowserHistory';
const browserHistory = createBrowserHistory();
const routingStore = new RouterStore();
const routeStore = {
    routing: routingStore
};

const history = syncHistoryWithStore(browserHistory, routingStore);

import "./util/common/date";
import './components/Modal/less/animation.less';
import './components/Modal/less/rbm-complete.less';
import "./style/css/font-awesome.css";
//初始化样式
import "./style/init.less";

import { Provider } from 'mobx-react';
import { configure } from 'mobx';
//mobx 开启严格模式
configure({ enforceActions: true});

import App from "./routers";



/************************************************/
// 初始化
/************************************************/
const MOUNT_NODE = document.getElementById('app');

/***********************************************/
// 运行中
/***********************************************/
let domRender = store => {
    store = Object.assign({}, store, routeStore);
    render(<Provider {...store}>
        <App history={history}/>
    </Provider>, MOUNT_NODE);
};

let renderGo = () => {
  domRender(require('./store/index').default);
};

if(module.hot){
    module.hot.accept('./store/index', () => {
        setImmediate(() => {
            unmountComponentAtNode(MOUNT_NODE);
            renderGo();
        })
    })
};

/**********************************************/
// 运行
/**********************************************/
renderGo();

