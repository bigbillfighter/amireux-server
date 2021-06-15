import Vue from 'vue'
import Router from 'vue-router'

import Login from '../views/Login'
import Manage from '../views/Manage'
import ExpenditureDetail from "../views/ExpenditureDetail"
import ExpenditureApply from "../views/ExpenditureApply"
import GateCard from "../views/GateCard";
import GoodsStatus from "../views/GoodsStatus";
import StaffBehavior from "../views/StaffBehavior";
import StaffInfo from '../views/StaffInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/manage',
      component: Manage,
      children: [{
        path: '',
        redirect: '/staffinfo'
      },{
        path: '/staffinfo',
        component: StaffInfo,
        meta: ['个人信息']
      }, {
        path: '/expenditureapply',
        component: ExpenditureApply,
        meta: ['财务管理', '经费申请'],
      }, {
        path: '/expendituredetail',
        component: ExpenditureDetail,
        meta: ['财务管理', '财务明细'],
      }, {
        path: '/gatecard',
        component: GateCard,
        meta: ['个人管理', '出勤信息'],
      }, {
        path: '/goodsstatus',
        component: GoodsStatus,
        meta: ['发货管理', '发货明细'],
      }, {
        path: '/staffbehavior',
        component: StaffBehavior,
        meta: ['员工管理', '员工绩效'],
      }
      ]
    }
  ]
})
