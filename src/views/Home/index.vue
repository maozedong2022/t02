<template>
    <div class="home_main" style="background:black;">
        <div class="pendant">
            <div class="item customer" @click="goKefu">
                <!-- <img class="" src="@/assets/dwqiuh.png" alt="" /> -->
                <img class="point" src="@/assets/dasdwq123.png" alt="" />
                <p class="title" style="writing-mode: tb-rl;">联系我们</p>
                <img class="kf" src="@/assets/dwqdwqewq.png" alt="" />
            </div>
        </div>
        <!-- 头部导航 -->
        <div>
            <!-- fixed 固定在顶部 -->
            <van-nav-bar fixed>
                <template v-slot:left>
                    <img class="logo" src="@/assets/logo.png" alt="" />
                </template>
                <template v-slot:right>
                    <div class="top_download">
                        <img class="download_Pic" src="@/assets/download_Pic.png" alt="" />
                        <div style="font-size: .26667rem;color: #fc7712;">下载APP</div>
                    </div>
                    <img class="download_Pic" src="@/assets/top_right_option.png" alt="" />
                    <!-- 坑: postcss只能翻译style里css样式代码, 标签内行内样式它无法转换px转rem, 所以需要自己手动计算 -->
                    <!-- <van-icon name="search" size="0.48rem" color="#fff" @click="" /> -->
                </template>
            </van-nav-bar>
        </div>
        <!-- 头部二级导航tab -->
        <div class="main">
            <div style="color: ">
                <div class="main_top" style="position:relative;">
                    <div class="mt_left" style="transition-duration: 0ms; transform: translateX(0px); width: 400px;">
                        <img src="@/assets/test_banner.bac9c9f9.png" alt="" style="height: 40vh; width: 400px;" />
                    </div>
                    <div class="mt_right"
                        style="position: absolute; top: 0vh; right: 20px; font-family: bate2; font-weight: 900;">
                        <h5 class="title1" data-v-6d518209="">数字货币抽奖平台</h5>
                        <p class="title3" data-v-6d518209="">公平、安全、公开</p>
                    </div>
                </div>
                <div class="hot_huodong">
                    <div class="hot_title" style="">
                        <img class="" src="@/assets/hot_huodong.png" alt="" style="width: 26px; height: 30px;" />
                        <p
                            style="font-size: .48rem;padding-left: 0.26667rem;font-family: PingFang SC;font-weight: 700;color: #fff;">
                            热门活动</p>
                    </div>
                    <div class="top_menu" style="padding: 1vh 0;">
                        <ul>
                            <li @click="register">
                                <img class="" src="@/assets/hot_reg.cba7d3ca.png" alt="" style="width:7.17333rem;" />
                            </li>
                            <li @click="join">
                                <img class="" src="@/assets/hot_daili.ba8cf178.png" alt="" style="width:7.17333rem;" />
                            </li>
                            <li @click="goKefu">
                                <img class="" src="@/assets/kefu.cf817717.png" alt="" style="width:7.17333rem;" />
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="game_list">
                    <div class="hot_title" style=" ">
                        <img class="" src="@/assets/qukuailianpic.png" alt=""
                            style="width: 26px; height: 30px; margin-right: 10px;" />
                        <p
                            style="font-size: .48rem;padding-left: 0.26667rem;font-family: PingFang SC;font-weight: 700;color: #fff;">
                            区块链游戏</p>
                    </div>
                    <div class="game_menu_01">
                        <div class="game_menu">
                            <div class="game_mune_item">
                                <img src="@/assets/game_bg1.485f5999.png" alt=""
                                    style="position: absolute;max-width: 100%;font-size: .16rem;" />
                                <div class="game_text">
                                    <p class="initCSS">幸运哈希</p>
                                    <p class="game_menu_sm initCSS">2.00倍</p>
                                </div>
                                <div class="bate-button">
                                    <a class="home-slide__button deposit-button btn--skew link-btn link-btn--primary"
                                        href="javascript:void(0);" data-v-6d518209=""><span
                                            data-v-6d518209="">立即游戏</span></a>
                                </div>
                            </div>
                        </div>
                        <div class="game_menu">
                            <div class="game_mune_item">
                                <img src="@/assets/game_bg1.485f5999.png" alt=""
                                    style="position: absolute;max-width: 100%;font-size: .16rem;" />
                                <div class="game_text">
                                    <p class="initCSS">幸运数字</p>
                                    <p class="game_menu_sm initCSS">1.95倍</p>
                                </div>
                                <div class="bate-button">
                                    <a class="home-slide__button deposit-button btn--skew link-btn link-btn--primary"
                                        href="javascript:void(0);" data-v-6d518209=""><span
                                            data-v-6d518209="">立即游戏</span></a>
                                </div>
                            </div>
                        </div>
                         <div class="game_menu">
                            <div class="game_mune_item">
                                <img src="@/assets/game_bg1.485f5999.png" alt=""
                                    style="position: absolute;max-width: 100%;font-size: .16rem;" />
                                <div class="game_text">
                                    <p class="initCSS">哈希牛牛</p>
                                    <p class="game_menu_sm initCSS">10.00倍</p>
                                </div>
                                <div class="bate-button">
                                    <a class="home-slide__button deposit-button btn--skew link-btn link-btn--primary"
                                        href="javascript:void(0);" data-v-6d518209=""><span
                                            data-v-6d518209="">立即游戏</span></a>
                                </div>
                            </div>
                        </div>
                         <div class="game_menu">
                            <div class="game_mune_item">
                                <img src="@/assets/game_bg1.485f5999.png" alt=""
                                    style="position: absolute;max-width: 100%;font-size: .16rem;" />
                                <div class="game_text">
                                    <p class="initCSS">幸运庄闲</p>
                                    <p class="game_menu_sm initCSS">1.95倍</p>
                                </div>
                                <div class="bate-button">
                                    <a class="home-slide__button deposit-button btn--skew link-btn link-btn--primary"
                                        href="javascript:void(0);" data-v-6d518209=""><span
                                            data-v-6d518209="">立即游戏</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    </div>
</template>
<script>
import { Toast } from 'vant';
import { getUserChannelsAPI, articlesListAPI } from '@/api'
import ArticleList from './component/ArticleList.vue'
import '@/styles/home.css'
export default {
    data() {
        return {
            active: 0, //tab导航页激活索引2
            userChannelList: [], //频道列表
            articlesList: [],//文章列表
        };
    },
    async created() {
        //频道列表

    },
    methods: {
        goKefu(){
            this.$router.push('/kefu')
        },
        register(){
            this.$router.push('/register')
        },
        join(){
            this.$router.push('/login')
        }
    },
    components: {
        ArticleList
    }
};
</script>
<!-- <style  scoped lang="less"> -->
<style   lang="less">


.logo {
    width: 100px;
    height: 30px;
}

.main {
    padding-top: 44px;
    color: #fff;
}

.top_download {
    padding: 0.104rem 0.144rem;
    border: 0.01333rem solid #fc7712;
    border-radius: 0.26667rem;
    margin-right: 0.53333rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    box-sizing: border-box;
}

.download_Pic {
    width: 20px;
    height: 20px;
    margin-right: 5px;
}

.hot_title {
    display: flex;
    align-items: center;
    padding-left: 0.66667rem;
}

.title1 {
    width: 3.33333rem;
    font-size: .73333rem;
    text-align: center;
    color: #fff;
    margin-bottom: 0.13333rem;
}

.title3 {
    text-align: center;
    margin-top: 0.09333rem;
    font-size: .46667rem;
    color: #fff;
}

.top_menu ul {
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;
}


.top_menu ul li {
    flex-shrink: 0;
    white-space: nowrap;
    text-align: center;
    font-size: .37333rem;
    color: #393a3f;
    font-weight: 700;
}

.game_menu {
    width: 100%;
    min-height: 4.66667rem;
    font-size: .69333rem;
    font-weight: 500;
    color: #fff;
    font-family: PingFang TC;
    margin-bottom: 0.66667rem;
}

.game_menu .game_mune_item {
    position: relative;
}

.game_menu .game_mune_item .game_text {
    position: absolute;
    top: 1rem;
    left: 8vw;
}

.game_menu_sm {
    font-size: .53333rem;
    font-weight: 700;
}

.game_menu .game_mune_item .bate-button {
    position: absolute;
    top: 2.8rem;
    left: 8vw;
}

.link-btn {
    text-decoration: none;
}

.btn--skew {
    transform: skewX(-23deg);
}

.link-btn {
    position: relative;
    display: inline-flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    padding: 0.06667rem 0.53333rem;
    min-height: 0.69333rem;
    min-width: 1.33333rem;
    font-size: .32rem;
    font-weight: 700;
    letter-spacing: normal;
    line-height: 1.2;
    font-style: normal;
    outline: none;
    transition: background-color .3s ease, box-shadow .3s ease;
    cursor: pointer;
    color: #fff;
    text-transform: capitalize;
    text-shadow: none;
    border-radius: 0.04rem;
    border: none;
    background: linear-gradient(180deg, #fc8801 -5.82%, #f82a1d 88.36%);
    margin: 0;
}
</style>
