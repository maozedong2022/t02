<template>
  <div>
    <van-nav-bar title="仿头条-登录" />
    <!--配置了路由要设置挂在点 -->
    <van-form @submit="onSubmit">
      <van-field v-model="formLogin.mobile" type="tel" label="手机号" placeholder="请输入手机号" required
        :rules="[{ required: true, message: '请填写手机号', trigger: 'onChange', pattern: /^1[3456789]\d{9}$/ }]" />
      <van-field v-model="formLogin.code" type="password" label="密码" placeholder="请输入密码" required
        :rules="[{ required: true, message: '请填写密码', trigger: 'onChange', pattern: /^\d{6}$/ }]" />
      <div style="margin: 16px;">
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