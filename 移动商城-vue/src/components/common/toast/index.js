import Toast from './Toast'

const obj = {}

obj.install = Vue => {
  // 1.创建组件构造器
  const toastConstructor = Vue.extend(Toast)

  // 2.根据组件构造器，可以创建出一个组件对象
  const toast = new toastConstructor()

  // 3.将组件对象，手动挂载到某一元素上
  toast.$mount(document.createElement('div'))

  // 4.toast.$el对应的就是div
  document.body.appendChild(toast.$el)

  Vue.prototype.$toast = toast
}

export default obj 