<template>
  <div id="personalContainer">
    <div class="header">
      <i class="iconfont iconhome1" @click="$router.push('/home')"></i>
      <div class="title"></div>
      <i class="iconfont icongouwuche3"></i>
      <i class="iconfont iconsearch" @click="$router.push('/search')"></i>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
  }
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>
@import '../../common/stylus/mixins.styl'
  #personalContainer
    width 375px
    height 667px
    .header
      width 350px
      height 44px
      padding 0 12px 0 13px
      line-height 50px
      position relative
      text-align center
      background #fafafa
      bottom-border-1px(#ddd)
      .iconfont
        font-size 22px
        color #333
      .iconhome1
        float left
      .icongouwuche3
        float right
      .title 
        width 80px
        height 23px
        position absolute
        top 0
        right 0
        bottom 0
        left 0
        margin auto
        background-size cover
        background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png?imageView&type=webp)
      .iconsearch
        position absolute
        right 55px
        top 0

    .content
      width 375px
      height 623px
      

 
</style>
