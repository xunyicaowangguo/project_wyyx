<template>
  <div id="shopContainer">
    <div class="header">
      <span class="shoptxt">购物车</span>
      <div class="right">领券</div>
    </div>
    <div class="maindesc">
      <div class="main-item">
        <i class="iconfont iconyuanhuan"></i>
        <span>30天无忧退货</span>
      </div>
      <div class="main-item">
        <i class="iconfont iconyuanhuan"></i>
        <span>48小时快速退款</span>
      </div>
      <div class="main-item">
        <i class="iconfont iconyuanhuan"></i>
        <span>满88元免包邮</span>
      </div>
    </div>
    <div class="main">
      <div class="shopcar">
        <div class="shopcarimg"></div>
        <div class="text">去添加点什么吧</div>
      </div>
      <div class="login" @click="$router.push('/personal')">登录</div>
    </div>
  </div>
</template>

<script>
  export default {
  }
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>

#shopContainer
  .header
    width 345px
    height 44px
    padding 0 15px
    display flex
    justify-content space-between
    align-items center
    .shoptxt
      color #333333
      font-size 18px
    .right
      color #dd1a21
      font-size 15px
      padding-right 15px
    
  .maindesc
    background #eee
    width 345px
    height 36px
    display flex
    align-items center
    justify-content space-between
    padding 0 15px
    .main-item
      height 18px
      line-height 18px
      font-size 12px
      align-items center
      display flex
      .iconfont
        font-size 5px
      span 
        margin-left 2px
        color #666

  .main
    width 375px
    height 404px
    background #f4f4f4
    padding-top 183px
    .shopcar
      .shopcarimg
        width 124px
        height 124px
        background-color #666
        background-image url('http://m.you.163.com//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png?imageView&type=webp') 
        margin 0 auto
      .text
        color #999999
        font-size 14px
        text-align center
        height 14px
        margin-bottom 25px
    .login
      width 239px
      height 46px
      background #dd1a21
      font-size 15px
      text-align center
      line-height 46px
      margin 0 68px
      color #ffffff
      border-radius 4px

      
</style>
