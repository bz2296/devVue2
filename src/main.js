import Vue from 'vue';
import VueI18n from 'vue-i18n';
import App from './App';
import router from './router';
import store from './store';
import getI18n from '@/i18n/i18n';

Vue.use(VueI18n);
Vue.config.productionTip = false;

const i18n = getI18n();

new Vue({
    router,
    store,
    render: (h) => h(App),
    i18n,
}).$mount('#app');
