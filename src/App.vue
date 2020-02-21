<template>
  <div id="container">
    <!-- 显示路由组件 -->
    <router-view></router-view>
    <FooterGuide v-if="$route.path !== '/personal' && $route.path !== '/search'"/>
  </div>
</template>

<script>
  import FooterGuide from './components/FooterGuide/FooterGuide.vue'
  export default {
    name: 'app',
    components:{FooterGuide},
  }
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>
  
  
</style>
