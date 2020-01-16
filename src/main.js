import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
import 'material-design-icons/iconfont/material-icons.css';
import MuseUIToast from 'muse-ui-toast/dist/muse-ui-toast';
import 'typeface-roboto'

Vue.use(MuseUI);
Vue.use(MuseUIToast);

Vue.config.productionTip = false
document.addEventListener("deviceready",function () {
    new Vue({
        router,
        store,
        render: h => h(App)
    }).$mount('#app')
},false);

