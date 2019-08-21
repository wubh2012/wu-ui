import Vue from 'vue'
import App from './App.vue'
import Button from "./components/Button.vue";
import Icon from "./components/Icon.vue";

Vue.config.productionTip = false
Vue.component(Button.name, Button)
Vue.component(Icon.name, Icon)

new Vue({
  render: h => h(App),
}).$mount('#app')
