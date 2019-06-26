<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
      <Long v-if="isShow" heHe="lalala" />
      <Record></Record>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Long from './components/Long.vue'
import Record from './components/Recoder.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
      Long,
      Record
  },
  computed:{
     isShow(){
       return this.$store.getters.isShow;
     }
  },
  watch:{
      $route(to,from){ //跳转组件页面后，监听路由参数中对应的当前页面以及上一个页面
          console.log(to)
        if(to.name=='book'||to.name=='my'){ // to.name来获取当前所显示的页面，从而控制该显示或隐藏footerBar组件
           this.$store.dispatch('showFooter') // 利用派发全局state.showFooter的值来控制        }else{
           this.$store.dispatch('hideFooter')
        }
      }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
