/**
 * @author: houzhitao
 * @since: 2018-06-05 15:57
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import {Link} from 'react-router-dom';

import iStyle from "../assets/indexhome.m.less";

import bannerUp from "../assets/bannerUp.png";
import ModeIntroImg from "../assets/mode_intro.jpg";
import Bill from "../assets/bill.jpg";
import OrderManager from "../assets/order_manager.jpg";
import GetOrder from "../assets/get_order.jpg";
//下单合作流程
import CProcessImg from "../assets/cprocess.png";


// @inject('routing')
@observer
class IndexHome extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {history, location} = this.props;
        return [
            <div key="index-home-one" className={iStyle.session01}>
                <img src={bannerUp} alt="" className={iStyle.session01Img} />
            </div>,
            <div key="index-home-two" className={iStyle.session02}>
                <div className={iStyle.t}>
                    <h1 className={iStyle.h}>看一看，了解城市服务商</h1>
                    <p className={iStyle.p}>城市服务商是指能为中大型家居企业商家提供当地城市家居售后服务的专业服务商公司。 </p>
                    <p className={iStyle.p}>入驻万师傅平台可以在互联网平台上对外展示，让您的企业得到更多的曝光机会，得到更多家居商家的关注。 </p>
                    <div className={iStyle.shL} />
                </div>
                <div className={iStyle.iM}>
                    <div className={iStyle.iMP}>
                        <img src={ModeIntroImg} alt=""/>
                        <div className={iStyle.iMA}>
                            <h4 className={iStyle.iMAH4}>模式介绍</h4>
                            <div className={iStyle.iMAL} />
                            <div className={iStyle.iMAFont}>
                                万师傅平台开通了城市服务商下单模式，
                                可以让企业级 商家用户直接对接企业级的城市服务商，
                                让双方在平台 签署合作协议，直接建立合作关系，
                                商家给城市服务商 下单，城市服务商进行订单服务，
                                服务完成后以账单的 形式通过平台进行打款结账
                            </div>
                        </div>
                    </div>
                    <div className={iStyle.iMP}>
                        <img src={GetOrder} alt=""/>
                        <div className={iStyle.iMA}>
                            <h4 className={iStyle.iMAH4}>获取订单方式</h4>
                            <div className={iStyle.iMAL} />
                            <div className={iStyle.iMAFont}>
                                城市服务商通过万师傅平台直接对接商家用户，具体方式如下：
                                <p>• 需要对商家的发布的招标商品清单进行报价；</p>
                                <p>• 商家采用了报价方案后会与城市服务商签订长期的合作协议；</p>
                                <p>• 在协议期间商家用户在这个城市的订单都由该服务商服务；</p>
                            </div>
                        </div>
                    </div>
                    <div className={iStyle.iMP}>
                        <img src={OrderManager} alt=""/>
                        <div className={iStyle.iMA}>
                            <h4 className={iStyle.iMAH4}>订单管理系统</h4>
                            <div className={iStyle.iMAL} />
                            <div className={iStyle.iMAFont}>
                                入驻成功后，平台提供城市服务商管理系统，方便管理订单，以及操作订单进度，系统具备以下功能：
                                <p>• 订单管理</p>
                                <p>• 员工管理</p>
                                <p>• 师傅管理</p>
                                <p>• 商家管理</p>
                                <p>• 车辆管理</p>
                                <p>• 师傅移动端操作系统</p>
                            </div>
                        </div>
                    </div>
                    <div className={iStyle.iMP}>
                        <img src={Bill} alt=""/>
                        <div className={iStyle.iMA}>
                            <h4 className={iStyle.iMAH4}>收款</h4>
                            <div className={iStyle.iMAL} />
                            <div className={iStyle.iMAFont}>
                                按与商家用户签订的协议里规定的账单结款周期，商家按完成服务的订单，以账单打款的形式通过平台支付到城市服务商系统的账户。
                            </div>
                        </div>
                    </div>
                </div>
                <Link to="/index/facilitatorEnter" className={iStyle.link}><button className={iStyle.settle}>马上入驻</button></Link>

                <p className={iStyle.linkman}>招商咨询请联系 QQ：3091747540 / 3077048955 电话：0755-3288 6838</p>
            </div>,
            <div key="index-home-there" className={iStyle.session03}>
                <img src={CProcessImg} alt=""/>
            </div>,
            <div key="index-home-six" className={iStyle.session06}>
                如有其它疑问，请点击 <Link to="/index/question" className={iStyle.link}>常见问题</Link> 了解
            </div>,
            <div key="index-home-seven" className={iStyle.session07}>
                © 2013 - 2018 www.wanshifu.com 万师傅版权所有 粤ICP备14009356号-2 增值电信业务经营许可证：粤B2-20140319
            </div>,
        ]
    }
}

IndexHome.propTypes = {};

export default IndexHome;