<template>
  <div id="container">
      <div class="header">
        <a class="logo"></a>
        <div class="topSearchInput">
          <i class="iconfont iconsearch"></i>
          <span class="placeholder">搜索商品，共20259款好物</span>
        </div>
        <div class="loginBtn">登录</div>
      </div>
      <div class="scroll">
        <div class="wrapper">
          <ul class="content">
            <li class="navItem">推荐</li>
            <li class="navItem">居家生活</li>
            <li class="navItem">服饰鞋包</li>
            <li class="navItem">美食酒水</li>
            <li class="navItem">个护清洁</li>
            <li class="navItem">母婴亲子</li>
            <li class="navItem">运动旅行</li>
            <li class="navItem">数码家电</li>
            <li class="navItem">全球特色</li>
          </ul>
        </div>
        <div class="toggle">
          <i class="iconfont iconjiantou-xia"></i>
        </div>
      </div>
      <div class="swiper">
        
      </div>
  </div>
</template>

<script>
  import BScroll from '@better-scroll/core'

  export default {
    mounted(){
      new BScroll('.wrapper',{
        scrollX: true,
        click: true
      })
    }
  }
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>
@import '../../common/stylus/mixins.styl'

#container
  width 100%
  height 100%
  .header
    display flex
    width 100%
    height 44px
    padding 8px 15px
    box-sizing border-box
    .logo
      display flex
      width 69px
      height 20px
      background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png?imageView&type=webp)
      background-size cover
      background-position 0 2px
      margin 4px 10px 4px 0
    .topSearchInput
      box-sizing border-box
      padding 6px 0
      text-align center
      width 221px
      height 28px
      background #ededed
      border-radius 5px
      .iconfont  
        display flex
        font-size 14px
        width 14px
        height 14px
        margin 0 5px 0 0
        display: inline-block;
        vertical-align: middle;
      .placeholder
        color #666666
        font-size 14px
    .loginBtn
      margin 3px 0 3px 8px
      width 37px
      height 20px
      color #dd1a21
      line-height 20px
      text-align center
      border: 1px solid #DD1A21;
      border-radius 5px
      font-size 12px
  .scroll  
      display flex
    .wrapper
      width 325px
      height 30px 
      overflow hidden
      .content
        display flex
        flex-wrap nowrap
        white-space nowrap
        height 30px 
         background #ccc
        .navItem
          height 30px
          line-height 30px
          padding 0 8px
          color #333
          font-size 14px
          margin-left 10px
          &:nth-child(1)
            margin-left 15px 
    .toggle
      text-align center
      line-height 30px
      width 50px
      height 30px
      background #bfa
</style>
