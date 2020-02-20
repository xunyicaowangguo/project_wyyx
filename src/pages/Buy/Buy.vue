<template>
  <div id="container">
    <div class="header">
      <i class="iconfont iconhome1"></i>
      <div class="title">值得买</div>
      <i class="iconfont icongouwuche3"></i>
      <i class="iconfont iconsearch"></i>
    </div>
    <div class="swiperTab">
      
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{

      }
    },
    mounted(){
                
    }
}
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>
  #container
    .header
      width 350px
      height 50px
      padding 0 12px 0 13px
      background #eee
      line-height 50px
      position relative
      .iconfont
        font-size 22px
        color #333
      .iconhome1
        float left
      .icongouwuche3
        float right
      .title 
        width 304px
        display inline-block
        text-align center
        font-size 18px
      .iconsearch
        position absolute
        right 55px
        top 0
</style>
