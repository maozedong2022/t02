  <template>
    <div>
      <!-- 文章列表 -->
      <!-- <article-item></article-item>
      <article-item></article-item>
      <article-item></article-item> -->
      <ArticleItem 
      v-for="obj in list" 
      :key="obj.art_id" 
      :artObj="obj"
      ></ArticleItem>
    </div>
  </template>
  
  <script>
  import ArticleItem from './ArticleItem.vue'

  export default {
    props:{
      list:Array //接到文章列表数组  映射到该页面
    },
    components: {
      ArticleItem
    }
  }
  </script>