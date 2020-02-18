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
        <Scroll/>
        <div class="toggle">
          <i class="iconfont iconjiantou-xia"></i>
        </div>
      </div>
      <Swiper/>
  </div>
</template>

<script>
  import Swiper from '../../components/Swiper/Swiper'
  import Scroll from '../../components/Scroll/Scroll'
  export default {
    components:{Swiper,Scroll},
    data(){
      return {
        isActive: true
      }
    },
    mounted(){
      
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
    // .wrapper
    //   width 325px
    //   height 30px 
    //   display flex
    //   overflow hidden
    //   .content
    //     display flex
    //     flex-wrap nowrap
    //     white-space nowrap
    //     height 30px 
    //     .navItem
    //       height 30px
    //       line-height 30px
    //       padding 0 8px
    //       color #333
    //       font-size 14px
    //       margin-left 10px
    //       position relative
    //       &:after
    //         content:''
    //         display block
    //         width 100%
    //         height 2px
    //         position absolute
    //         left 0
    //         bottom 0
    //         background #dd1a21
    //         color #dd1a21
    //         // &.active
    //         //   background #dd1a21
    //         //   color #dd1a21
    //       &:nth-child(1)
    //         margin-left 15px 
    .toggle
      text-align center
      line-height 30px
      width 50px
      height 30px
      background #bfa
</style>
