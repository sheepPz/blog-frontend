<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  }
}
</script>

<style lang="less" scoped>
  #app {
      height: 100%;
  }
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
  #cover {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;   
    background-color: #999; 
    opacity: 0.2;
    z-index: -1;
  }
  .font {
    color: red;
    font-size: 30px;
  }
.page-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
</style>