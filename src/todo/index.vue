<template>
  <div>
    <full-page ref="fullpage" :options="opts" id="fullpage">
      <div class="section" id="todo-section">
        <div class="main">
          <div>
            <div id="header">
              <Header></Header>
            </div>
            <Todo></Todo>
            <div id="foot">
              <Footer></Footer>
            </div>
          </div>
        </div>
      </div>
      <div class="section" id="nothing-section">
        <div class="main">
          <img :src="snow" class="bg"/>
          <div class="box">
            Second section ...
          </div>
        </div>
      </div>  
    </full-page>
  </div>
</template>

<script>
import Header from './header.vue'
import Footer from './footer.jsx'
import Todo from './todo.vue'
import snow from '@/assets/images/snow.jpg'

export default {
  components: {
    Header,
    Footer,
    Todo
  },
  data() {
    return {
      opts: {
        verticalCentered: true,
      },
      snow
    }
  }
}
</script>

<style lang="less" scoped>
 #todo-section {
    background-image: url('../assets/images/beijing.jpg');
    background-size: cover;
 }
 #nothing-section {
    font-size: 30px;
    font-weight: bold;
    color: rgba(250,250,210, 0.9);
 }
  .main {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    .box {
      position: absolute;
    }
    .bg {
      filter: blur(2px);
      height: 100%;
      width: 100%;
    }
  }
  #foot {
    position: absolute;
    left: 0;
    right: 0;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #header {
    position: absolute;
    left: 0;
    right: 0;
    top: 20%;
  }


</style>