<template>
  <div id="container">
      <div class="header">
        <div class="search">
          <i class="iconfont iconsearch"></i>
          <span>搜索商品，共22029款好物</span>
        </div>
      </div>
      <div class="main">
        <div class="left">
          <ul class="cateList">
            <li class="cateItem"><a class="active" href="">推荐专区</a></li>
            <li class="cateItem"><a href="">推荐专区</a></li>
            <li class="cateItem"><a href="">推荐专区</a></li>
            <li class="cateItem"><a href="">推荐专区</a></li>
            <li class="cateItem"><a href="">推荐专区</a></li>
            <li class="cateItem"><a href="">推荐专区</a></li>
            <li class="cateItem"><a href="">推荐专区</a></li>
            <li class="cateItem"><a href="">推荐专区</a></li>
            <li class="cateItem"><a href="">推荐专区</a></li>
            <li class="cateItem"><a href="">推荐专区</a></li>
            <li class="cateItem"><a href="">推荐专区</a></li>
            <li class="cateItem"><a href="">推荐专区</a></li>            
          </ul>
        </div>
        <div class="right">
          <div class="pic">
            <img src="" alt="">
          </div>
          <div class="goodsList">
            <ul class="list">
              <li class="goodItem">
                <img src="" alt="">
                <div class="name"></div>
              </li>
            </ul>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
  export default {
  }
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>

@import '../../common/stylus/mixins.styl'

#container
  .header
    width 345px
    height 44px
    padding 0 15px
    bottom-border-1px(#ddd)
    position fixed
    left 0
    top 0
    z-index 10
    background #fff
    .search
      width 345px
      height 28px
      border-radius 4px
      background #ededed
      margin 8px 0
      text-align center
      line-height 28px
      .iconfont
        font-size 14px
        margin-right 5px
      span 
        font-size 14px
        color #666

  .main
    width 375px
    .left
      width 81px
      height 574px
      padding 20px 0
      margin-top 44px
      right-border-1px(#ddd)
      .cateList
        width 81px
        .cateItem
          width 81px
          height 25px
          line-height 25px
          text-align center
          margin-top 20px
          font-size 14px
          &:first-child
            margin-top 0
          a
            color #333
            &.active
              color #dd1a21
              
    // .right
              





 
</style>
