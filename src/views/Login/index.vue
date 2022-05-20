<template>
  <div>
    <van-nav-bar title="仿头条-登录" />
    <!--配置了路由要设置挂在点 -->
    <van-form @submit="onSubmit">
      <!-- van-form整体表单组件
        @submit -> 自定义事件(提交事件)

        van-field 输入框(表单一项)
        1. 输入框name属性="用户名"
        表单整体提交时, 默认收集一个提交对象
        往后台发送的参数名就是name里值
        {"用户名": '页面值'}
        2. label属性输入框左侧文本
        3. rules属性配置检验规则
        :属性名="表达式"
        属性名="字符串"
        v-model是双向数据绑定
       -->
      <van-field v-model="formLogin.mobile" type="tel" label="手机号" placeholder="请输入手机号" required
        :rules="[{ required: true, message: '请填写手机号', trigger: 'onChange', pattern: /^1[3456789]\d{9}$/ }]" />
      <van-field v-model="formLogin.code" type="password" label="密码" placeholder="请输入密码" required
        :rules="[{ required: true, message: '请填写密码', trigger: 'onChange', pattern: /^\d{6}$/ }]" />
      <div style="margin: 16px;">
        <!-- round是否为圆形
              (1): 属性后面无值, 默认值为true
              block代表块级元素
              type代表类型(有默认颜色)
              native-type代表原生button的type属性
              代表这个van-button组件渲染的原生button标签type是submit提交整个表单功能的按钮
            -->
        <van-button block type="info" native-type="submit" :disabled="isLoading" :loading="isLoading"
          loading-text="正在登录ing...">登录</van-button>
      </div>
    </van-form>


  </div>
</template>

<script>

import { setToken } from '@/utils/token.js'
import { loginAPI } from '@/api'
import { Notify } from 'vant';

export default {

  data() {
    return {
      formLogin: {
        mobile: '13888888888',
        code: '246810' // 默认只能用246810后台规定了
      },
      isLoading: false // 登录按钮-加载状态
    }
  },
  methods: {
    async onSubmit(v) {
      console.log('this', this.formLogin);
      // 状态设置true
      this.isLoading = true

      try {
        const res = await loginAPI(this.formLogin)
        console.log('res', res)
        Notify({ type: 'success', message: '登录成功啦!!!' })
        setToken(res.data.data.token)
        // setStorage('refresh_token', res.data.data.refresh_token)
        // 跳转一定要写在最后->尽量最后执行
        // location.href -> 当前浏览器地址和要跳转的地址一样(不包含#后面锚点信息) -> 不会刷新网页
        // 地址改变, 就会导致网页刷新
        // this.$router.push() 压栈(会产生历史记录, 可以回退), this.$router.replace() 替换(不会产生历史记录)
        // this.$router.replace({
        //   path: this.$route.query.path || '/layout/home' // 因为我们路由规则里/layout里没有重定向, 所以直接在这里写全
        // })
      } catch (err) {
        // Promise内ajax抛出错误, 直接进入这里
        Notify({ type: 'danger', message: '账号或密码错误' })
      }

      this.isLoading = false // 网络请求完成无论成功/报错, 把状态关掉
    }
  }

}
</script>

<style lang="less" scoped>
/* 此类名是van-nav-bar组件内根标签 */
//   .van-nav-bar {
//    background-color: #007bff;
//   }
//  此选择器名字是van-nav-bar组件内标签
//  scoped尝试把此选择器后属性选择器匹配当前页面标签 (选不中组件内部的) 
//  lang="less" 当前style标签内是less语法
//  用/deep/就不会被vscode标记红线
//  /deep/ 会把属性选择器加到前面 (用后代选择器的方式往里找匹配的类名)
//  结论: 要修改组件内样式, 如果你用了scoped, 就需要在选择器前/deep/即可 
/deep/ .van-nav-bar__title {
  color: white; //这里css优先级要比cover.less高
}
</style>