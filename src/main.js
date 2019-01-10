// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/style/reset.css';
import 'font-awesome/css/font-awesome.min.css';
import './assets/style/font.css';
import 'element-ui/lib/theme-chalk/index.css';
import { Pagination,Loading } from 'element-ui';
import Element from 'element-ui'
import {clickBlock, clickAddress, clickTransaction} from './common/clickLink'

Vue.use(Pagination);
Vue.use(Loading);
Vue.use(Element);
Vue.use(clickAddress);
Vue.use(clickBlock);
Vue.use(clickTransaction);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
