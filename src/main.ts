import Vue from 'vue';
import App from './App.vue';
import * as UiLightValidate from 'light-validate-vue-ui';
Vue.use(UiLightValidate, {
  label: (exception) => {
    return `${exception.code} ${exception.property}`;
  }
});
Vue.config.productionTip = false;
new Vue({
  render: (h) => h(App),
}).$mount('#app');
