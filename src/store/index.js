/**
 * @author: houzhitao
 * @since: 2018-05-30 18:02
 * description: 所有store 注入到一起
 */

import homeStore from "../screens/Home/store/homestore";
import indexhomeStore from "../screens/IndexHome/store/indexhomeStore";
import indexassessStore from "../screens/IndexAssess/store/indexassessStore";
import indexquestionStore from "../screens/IndexQuestion/store/indexquestionStore";
import facilitatorenterStore from "../screens/FacilitatorEnter/store/facilitatorenterStore";
import loginStore from "../screens/Login/store/loginStore";

export default {
    homeStore,
    indexhomeStore,
    indexassessStore,
    indexquestionStore,
    facilitatorenterStore,
    loginStore
};