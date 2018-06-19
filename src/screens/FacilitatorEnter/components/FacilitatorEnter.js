/**
 * @author: houzhitao
 * @since: 2018-06-05 19:45
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {observer, inject} from 'mobx-react';

@inject('facilitatorenterStore')
@observer
class FacilitatorEnter extends Component {
    constructor(props) {
        super(props);
        this.store = new props.facilitatorenterStore();
    }

    componentDidMount(){

    }

    render() {
        return (<div>FacilitatorEnter</div>)
    }
}

FacilitatorEnter.propTypes = {};

export default FacilitatorEnter;