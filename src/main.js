import Vue from 'vue'
import App from './App.vue'
import Button from "./components/Button.vue";
import Icon from "./components/Icon.vue";
import ButtonGroup from "./components/ButtonGroup.vue";
import chai from 'chai'


Vue.config.productionTip = false
Vue.component(Button.name, Button)
Vue.component(Icon.name, Icon)
Vue.component(ButtonGroup.name, ButtonGroup)

new Vue({
  render: h => h(App),
}).$mount('#app')



const expect = chai.expect

{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'w-icon-setting'
    }
  })
  vm.$mount('#test')
  let useElement = vm.$el.querySelector('use')
  let href = useElement.getAttribute('xlink:href')
  expect(href).to.eq('#w-icon-setting')
  vm.$el.remove()
  vm.$destroy()

}