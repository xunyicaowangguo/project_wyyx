<template>
  <div id="personalContainer">
    <div class="header">
      <i class="iconfont iconhome1" @click="$router.push('/home')"></i>
      <div class="title"></div>
      <i class="iconfont icongouwuche3"></i>
      <i class="iconfont iconsearch" @click="$router.push('/search')"></i>
    </div>
    <div class="content">
      <div class="middle">
        <div class="logowrap">
          <img class="logo" src="//yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png">
        </div>
        <div class="logintype">
          <div class="phonetype">
            <i class="iconfont iconshoujidenglu"></i>
            <span class="text">手机号快捷登录</span>
          </div>
          <div class="mailtype">
            <i class="iconfont iconyouxiangdenglu"></i>
            <span class="text">邮箱账号登录</span>
          </div>
        </div>
      </div>
      <div class="foot">
        <div class="wx">
          <i class="iconfont iconweixin"></i>
          <span>微信</span>
        </div>
        <div class="qq">
          <i class="iconfont iconqq2"></i>
          <span>QQ</span>
        </div>
        <div class="wb">
          <i class="iconfont iconweibo"></i>
          <span>微博</span>
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
  #personalContainer
    .header
      width 350px
      height 44px
      padding 0 12px 0 13px
      line-height 50px
      position relative
      text-align center
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
      background #f2f5f4
      .middle
        width 375px
        .logowrap
          width 375px
          height 45px
          padding 80px 0 116px
          text-align center
          img 
            width 134px
            height 45px
        .logintype
          padding 0 20px
          width 335px
          height 110px
          .phonetype
            width 335px
            height 47px
            background #dd1a21
            color #fff
            margin-bottom 16px
            border-radius 4px
            display flex
            justify-content center
            line-height 47px
            .iconfont
              font-size 20px
              margin-right 8px
            .text
              font-size 14px
          .mailtype
            width 333px
            height 45px
            color #dd1a21
            display flex
            justify-content center
            line-height 45px
            border-radius 4px
            border 1px solid #dd1a21 
            .iconfont
              font-size 20px
              margin-right 8px
            .text
              font-size 14px
      .foot      
        font-size 14px
        color #7f7f7f
        text-align center
        width 375px
        height 20px
        padding 212px 0 40px
        div
          display inline-block
          padding 0 20px
          height 20px
          line-height 20px
          span 
            margin-left 4px
          .iconfont
            font-size 17px
        .qq
          border-left 1px solid #979797
          border-right 1px solid #979797

 
</style>
