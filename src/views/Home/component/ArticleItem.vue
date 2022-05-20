   <template>
  <!-- 一条文章单元格 -->
  <van-cell>
    <!-- 标题区域的插槽 -->
    <template #title>
      <div class="title-box">
        <!-- 标题 -->
        <span>{{ artObj.title }}</span>
        <!-- 单图 -->
        <!-- <img class="thumb" src="https://img01.yzcdn.cn/vant/cat.jpeg" /> -->
        <img v-if="artObj.cover.type === 1" class="thumb" :src="artObj.cover.images[0]" />
      </div>
      <!-- 多张图片 -->
      <!-- <div class="thumb-box">
        <img class="thumb" src="https://img01.yzcdn.cn/vant/cat.jpeg" />
        <img class="thumb" src="https://img01.yzcdn.cn/vant/cat.jpeg" />
        <img class="thumb" src="https://img01.yzcdn.cn/vant/cat.jpeg" />
      </div> -->
      <div class="thumb-box" v-if="artObj.cover.type > 1">
        <img class="thumb" v-for="(imgUrl, index) in artObj.cover.images" :key="index" :src="imgUrl" />

      </div>
    </template>
    <!-- label 区域的插槽 -->
    <template #label>
      <div class="label-box">
        <div>
          <span>{{ artObj.aut_name }}</span>
          <span>{{ artObj.comm_count }}评论</span>
          <span>{{ timeAgo(artObj.pubdate) }}个月前</span>
        </div>
        <!-- 反馈按钮 -->
        <van-icon name="cross" />
      </div>
    </template>
  </van-cell>
</template>
   
   <script>
import { timeAgo } from '@/utils/date.js'

export default {
  props: {
    artObj: Object  // Object是数据类型 定义props变量Object接收, 从ArticleList传递过来的文章信息对象
  },
  methods: {
    timeAgo: timeAgo
  }

}
</script>
   
   <style scoped lang="less">
/* 标题样式 */
.title-box {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

/* label描述样式 */
.label-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* 文章信息span */
.label-box span {
  margin: 0 3px;

  &:first-child {
    margin-left: 0;
  }
}

.thumb {
  width: 113px;
  height: 70px;
  background-color: #f8f8f8;
  object-fit: cover;
}

/* 三图, 图片容器 */
.thumb-box {
  display: flex;
  justify-content: space-between;
}
</style>
   