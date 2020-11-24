<template>
  <div class="blog-page">
        <blog-header/>
        <content-list/>
  </div>
</template>

<script>
import blogHeader from './header.vue'
import contentList from './content.vue'
export default {
    components: {
        blogHeader,
        contentList
    }
}
</script>

<style lang="less">
    .blog-page {
        font-weight: bold;
        font-size: 28px;
        // color: #eb7350;
        color: #4d4d4d;
        height: 100%;
    }
</style>