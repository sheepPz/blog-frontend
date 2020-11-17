<template>
  <div>
    <div id="main">
      <Header></Header>
      <Todo></Todo>
    </div>
    <div id="foot">
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Header from './header.vue'
import Footer from './footer.jsx'
import Todo from './todo.vue'

export default {
  components: {
    Header,
    Footer,
    Todo
  }
}
</script>

<style lang="less" scoped>
  #main {
    position: relative;
  }
  #foot {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>