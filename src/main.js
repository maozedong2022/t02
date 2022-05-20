import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible' //适配移动端字体大小

import {NavBar} from 'vant'

import {Form, Field, Button,Tabbar,TabbarItem,Icon,Tab,Tabs,Cell } from 'vant'  //引入表单组件
Vue.use(Form)
Vue.use(Field)
Vue.use(Button)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Icon)
Vue.use(Tab)
Vue.use(Tabs)
Vue.use(Cell)



Vue.use(NavBar)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


// 目标1: 有2处在检查我的代码
// vscode+eslint插件+工作区根目录下.eslinrc.js配置, 在保存时, 检查代码
// 如果在写代码过程中用插件解决了问题, webpack里就不会报错了
// webpack开发服务器(在下面终端中)+eslit插件, 在保存时, 检查代码

// 如果不好使排查问题
// 1. ESLint插件右下角设置中 -> 扩展设置
// 2. 打开配套md笔记, 大纲左边的最下面, 有一些常见的错误

// 目标2: 组件使用套路
// 1. 明确目标, 找到类似组件
// 2. 引入注册然后复制过来
// 3. 读和删没用的
// 4. 修改, 改成我们想要的样子
// 样式修改:
// (1): 找到类名, 自己写css覆盖掉它
// (2): 看文档, 是否支持自定义样式

// 首页-> 滚动位置保存
// 问题: 首页滚动一些, 点击我的再切回来为何, 滚动条回到了顶部?
// 疑惑: 组件缓存keep-alive保存组件标签+样式+js变量, 不会保存滚动位置
// 原因: 切换到我的页面, 页面高度不够高, 没有滚动条 (此"滚动条整个网页"的)
// 滚动位置会回到顶部, 所以切换回首页, 只是内容改变了, 滚动条还在顶部
// 解决: 滚动时, 实时保存, 在它的路由对象meta中保存滚动位置

// 代码位置, 代码拼写, 代码值问题, 方法名, 引入方式
// 配置文件位置, 配置代码, 忘记下包, ...
// 传参, 解构赋值, ajax请求不带值带错了, 400, 401, 404, 405\, 往后端传参参数名不带, 带错
// 空格Bearer, 没定义, 路径, 符号
// list加载更多 key重复问题...
// return 没写.. 简写写错, 解构赋值
// 路由匹配, 跳转路径, 路由传参没写name参数名, 二级路由多个/, 一级路由不写/, children单词, path单词
// 高端: 环境, 插件, 版本...
// 弄一个全是bug的项目, 把所有bug放在这个项目里, 让大家练习解决bug

