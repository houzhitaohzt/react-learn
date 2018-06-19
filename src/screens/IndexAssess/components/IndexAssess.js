/**
 * @author: houzhitao
 * @since: 2018-06-05 16:06
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { observer, inject} from 'mobx-react';
import {Confirm} from "../../../components/Modal";

@inject('routing')
@observer
class IndexAssess extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { push } = this.props.routing;
        return (<div>IndexAssess
            <button onClick={() => push('/index/home')}>首页</button>
            <button onClick={() => push('/index/question')}>常见问题</button>
            <Confirm isShow={true} />
        </div>)
    }
}

IndexAssess.propTypes = {};

export default IndexAssess;