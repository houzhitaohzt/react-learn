/**
 * @author: houzhitao
 * @since: 2018-05-30 17:59
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {observer, inject} from 'mobx-react';
import homeStyle from "../assets/home.m.css";

@inject('homeStore')
@inject('routing')
@observer
class Home extends Component {
    constructor(props) {
        super(props);
        this.store = new this.props.homeStore();
    }

    render() {
        let { routing, location, history, match, route} = this.props;
        return (<div>
            <button onClick={this.store.num1Click} className={homeStyle.buttonone}>第一个</button>
            <button onClick={this.store.num2Click} className={homeStyle.buttontwo}>第二个</button>
            <button onClick={() => routing.push('/')} className={homeStyle.buttonone}>跳转</button>
            <div>{this.store.total}</div>
        </div>)
    }
}

Home.propTypes = {};

export default Home;