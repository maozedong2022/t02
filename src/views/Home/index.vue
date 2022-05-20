<template>
    <div>
        <!-- 头部导航 -->
        <div>
            <!-- fixed 固定在顶部 -->
            <van-nav-bar fixed>
                <template v-slot:left>
                    <img class="logo" src="@/assets/logo.png" alt="" />
                </template>
                <template v-slot:right>
                    <!-- 坑: postcss只能翻译style里css样式代码, 标签内行内样式它无法转换px转rem, 所以需要自己手动计算 -->
                    <van-icon name="search" size="0.48rem" color="#fff" @click="" />
                </template>
            </van-nav-bar>
        </div>
        <!-- 头部二级导航tab -->
        <div class="main">
            <!-- van-tabs 一行容器
            van-tab 每个tab栏
            v-model关联的激活项的下标(双向绑定)
            tab栏+内容
            2. 坑: sticky参照"父级div标签"进行粘性布局, 如果body/html设置高度, 父级div一起走了, 所以内部sticky也上去的

            3. (重要)每个van-tab代表一个标签导航, 中间夹着内容, 对应的下属列表内容
            4. (重要)每个van-tab都对应"独立的自己"的ArticleList(多次)
            5. 细节
            van-tab循环了很多标签导航, 与之一一对应的内容列表不是上来都创建的, 默认创建当前激活导航对应列表组件
            第一次切换到对应频道时, 才会创建下属的ArticleList组件->created方法
            第二次切换就是显示/隐藏切换 -->
            <van-tabs v-model="active" sticky animated offset-top="1.226667rem">
                <van-tab v-for="obj in userChannelList"
                :title="obj.name" :key="obj.id">
                <!-- {{obj.name}} -->
                <ArticleList :list="articlesList"></ArticleList>
                </van-tab>
                <!-- <van-tab title="标签 2">内容 2</van-tab>
                <van-tab title="标签 3">内容 3</van-tab>
                <van-tab title="标签 4">内容 4</van-tab> -->
            </van-tabs>
        </div>



    </div>
</template>
<script>
import { Toast } from 'vant';
import {getUserChannelsAPI,articlesListAPI} from '@/api'
import ArticleList from './component/ArticleList.vue'
export default {
    data() {
        return {
            active: 0, //tab导航页激活索引2
            userChannelList:[], //频道列表
            articlesList:[],//文章列表
        };
    },
    async created (){
        //频道列表
        const res = await getUserChannelsAPI();
        // console.log("list",res)
        this.userChannelList = res.data.data.channels;

        //文章列表
        const res1 = await articlesListAPI({channel_id:0, timestamp:new Date().getTime()});
        console.log('res1',res1)
        this.articlesList = res1.data.data.results;
    },
    methods: {
        // onClickLeft() {
        //   Toast('返回');
        // },
        // onClickRight() {
        //   Toast('按钮');
        // },
    },
    components:{
        ArticleList
    }
};
</script>
<style  scoped lang="less">
.logo {
    width: 100px;
    height: 30px;
}

.main {
    padding-top: 44px;
}
</style>
