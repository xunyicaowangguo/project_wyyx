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
    <div class="main">
      <div class="main-item">
        <i class="iconfont iconyiwutong"></i>
        <span>网易自营品牌</span>
      </div>
      <div class="main-item">
        <i class="iconfont iconjiaoyi"></i>
        <span>30天无忧退货</span>
      </div>
      <div class="main-item">
        <i class="iconfont iconmn_dunpai"></i>
        <span>48小时快速退款</span>
      </div>
    </div>
    <ClassList/>
    <div class="bigPromotionModule">
      <div class="Promotion" v-for="(Promotion,index) in bigPromotionData" :key="index">
        <a class="cells" :href="cell.schemeUrl" v-for="(cell,index) in Promotion.cells" :key="index">
          <img :src="cell.picUrl">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from '../../components/Swiper/Swiper'
  import Scroll from '../../components/Scroll/Scroll'
  import ClassList from '../../components/ClassList/ClassList'
  import bigPromotion from '../../common/datas/index.json'
  export default {
    components:{Swiper,Scroll,ClassList},
    data(){
      return {
         bigPromotionData:[]       
      }
    },
    mounted(){
      this.bigPromotionData = bigPromotion.bigPromotionModule.floorList
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
    .toggle
      text-align center
      line-height 30px
      width 50px
      height 30px
      background #bfa
  
  .main
    width 100%
    height 36px
    display flex
    align-items center
    padding 0 15px
    box-sizing border-box 
    .main-item
      width 228px
      height 18px
      line-height 18px
      font-size 12px
      .iconfont
        font-size 12px
        color #dd1a21
      span 
        margin-left 4px

  .bigPromotionModule
    width 100%
    height 414px
    background #1674e3
    .promotion
      width 100%
      &:nth-child(1)
        background #fff
        height 120px
        &.cells
          display block
          width 100% 
          height 120px
          img
            display block
            width 100%
            height 120px
      &:nth-child(2)
        width 100%
        height 80px
        img 
          width 375px
          height 80px
      &:nth-child(3)
        width 100%
        height 93px
      


</style>
