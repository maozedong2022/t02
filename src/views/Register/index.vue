<template>
    <div class="bodyStyle">
            <div class="top-page-header"> </div>
            <div class="register noHeader">
                <div>
                    <div class="page-header">
                        <div @click="goHome" class="left-arrow">
                            <i></i>
                        </div>
                        <h1>注册</h1>
                        <div class="right-menu">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAdAQMAAAAaZ0fHAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAGUExURUdwTP///5+UokMAAAABdFJOUwBA5thmAAAAGklEQVQI12P4DwQPGJBJSgA72ARkkhKA4TYA3dso1TMQW/QAAAAASUVORK5CYII=" alt="">
                        </div>
                    </div> 
                </div>
                <div style="height: 6vh;"></div>
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
                        <input type="password" placeholder="请输入您的密码">
                    </div>
                </div>
                <div class="item password">
                    <div class="password1">
                        <i></i>
                        <input type="password" placeholder="再确认您的密码">
                    </div>
                </div>
                <div class="item addr">
                    <div class="addr1">
                        <i></i>
                        <input type="text" placeholder="请输入TRC20地址">
                    </div>
                </div>
                <div class="item btn">
                    <span>注册</span>
                </div>
                <div class="item toLogin">
                    <span>已有账号？</span>
                    <a >立即登录</a>
                </div>
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
            </div>
    </div>

</template>
<script>
export default {
    methods: {
        goHome(){
            this.$router.push('/layout/home')
        }
    },
}
</script>

<style></style>