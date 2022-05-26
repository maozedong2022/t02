<template>
  <div class="bodyStyle">
    <div class="login noHeader">
        <div class="page-header">
          <div @click="goHome" class="left-arrow">
            <i></i>
          </div>
          <h1>登录</h1>
          <div class="right-menu">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAdAQMAAAAaZ0fHAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAGUExURUdwTP///5+UokMAAAABdFJOUwBA5thmAAAAGklEQVQI12P4DwQPGJBJSgA72ARkkhKA4TYA3dso1TMQW/QAAAAASUVORK5CYII=" alt="">
            <img src="" alt="">
          </div>
        </div>
        <div style="height: 8vh;"></div>
        <div class="login_tc">
          <div class="item img_ct">
            <div>
              <img src="@/assets/login_banner.34da0091.png" alt="">
            </div>
          </div>
          <p style="text-align: center;font-size:16px;">欢迎你回来</p>
          <div style="height: 8px;"></div>
          <div class="item account">
            <div class="account1">
              <i></i>
              <input type="text" placeholder="请输入您的用户名">
            </div>
          </div>
          <div class="item password">
            <div class="password1">
              <i></i>
              <input type="text" placeholder="请输入您的密码">
            </div>
          </div>
          <div class="item remind">
            <span class="yes">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAaBAMAAAA3YgP4AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAqUExURUdwTP///////////////////////////////////////////////////4sGkswAAAANdFJOUwDcHKZO+kbRfRjwM8fiVmmcAAAAiElEQVQoz2NgIA6kYRFTvyuEIcYke/cyhqDi3bvXsSjEVAlUeFcSi8KLClgUgixnacOi0PauAYZCbiTb4ApZgJIGaAoZONfClSJZ7QpXClcI1B8LVYriRphSJIVwpWiegShFUQhVug3d1yCld1EVQpTexQgeV0yFUKUY4ZgFFCzCiJrG0BMIHgAjPGaCi1zmswAAAABJRU5ErkJggg==" alt="">
            </span>
            <label>记住我</label>
          </div>
          <div class="item btn">
            <span>登录</span>
          </div>
          <div class="item toRegister">
            <span>没有账号</span>
            <a>立即注册</a>
          </div>
          <div style="height: 8vh;"></div>
          <div class="item constract">
            <span class="left">
              <i></i>
              <label >先去逛逛</label>
            </span>
            <span class="line"></span>
            <span class="right">
              <i></i>
              <label>联系我们</label>
            </span>
          </div>
          <div style="height:10vh;"></div>
      </div>

      </div>
  </div>
</template>

<script>


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
    goHome(){
      this.$router.push('/')
    }
  }

}
</script>

<style lang="less" scoped>
</style>