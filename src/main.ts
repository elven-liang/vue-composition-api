import Vue from 'vue'

import VueCompositionApi from '@vue/composition-api';

import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

 
Vue.use(VueCompositionApi);
declare module '@vue/composition-api/dist/component/component' {
  interface SetupContext {
    readonly refs: { [key: string]: Vue | Element | Vue[] | Element[] };
  }
}
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
