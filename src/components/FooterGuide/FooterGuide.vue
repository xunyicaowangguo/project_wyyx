<template>
  <div id="footerContainer">
    <div @click="goPath('/home')" :class="{active: $route.path === '/home'}" class="guideItem">
      <i class="iconfont iconhome"></i>
      <span>首页</span>
    </div>
    <div @click="goPath('/classify')" :class="{active: $route.path === '/classify'}" class="guideItem">
      <i class="iconfont iconshangpinfenlei2"></i>
      <span>分类</span>
    </div>
    <div @click="goPath('/buy')" :class="{active: $route.path === '/buy'}" class="guideItem">
      <i class="iconfont iconwogoumaidexinxi"></i>
      <span>值得买</span>
    </div>
    <div @click="goPath('/shop')" :class="{active: $route.path === '/shop'}" class="guideItem">
      <i class="iconfont icongouwuche3"></i>
      <span>购物车</span>
    </div>
    <div @click="goPath('/personal')" :class="{active: $route.path === '/personal'}" class="guideItem">
      <i class="iconfont iconwode"></i>
      <span>个人</span>
    </div>
  </div>
</template>

<script>
  export default {
    name:'footerGuide',
    methods: {
      goPath(path){
        //跳转至指定的路由路径
        //编程式路由导航：$router
        /*
          $router 与 $route 的区别
          $router：路由器对象，包含路由跳转的方法 push()/replace()
          $route: 路由对象，包含当前路径下所有路由信息(path,params,meta,query)
        */
       // this.$router.push(path)
       path !== this.$route.path && this.$router.push(path)
      //  if(path !== this.$route.path){
      //    this.$router.push(path)
      //  }
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl";

  #footerContainer
    display flex
    top-border-1px(#d9d9d9)
    position fixed
    left 0
    bottom 0
    width 100%
    height 49px
    box-sizing border-box
    background-color #fff
    .guideItem
      width 20%
      height 49px
      flex-direction column
      text-align center
      display flex
      &.active
        color #dd1a21
      .iconfont
        font-size 20px
        line-height 30px
      span 
        font-size 12px

 
</style>
