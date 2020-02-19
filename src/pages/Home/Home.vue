<template>
  <div id="container">
    <div class="headerContainer">
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
    <div class="footer">
      <ClassList/>
      <div class="bigPromotionModule">
        <div class="promotion" v-for="(promotion,index) in bigPromotionData" :key="index">
          <div class="cellContainer" v-for="(cell,index) in promotion.cells" :key="index">
            <a class="cell" :href="cell.schemeUrl">
              <img :src="cell.picUrl" alt="">
            </a>
          </div>
        </div>
      </div>
      <div class="shopCard-1">
        <div class="margin-top"></div>
        <ShopCard>
          <template v-slot:title>
            <div class="headerTitle">
              <span> 新人专享礼 </span>
            </div>
          </template>
          <template v-slot:content>
            <div class="middle">
              <div class="left"></div>
              <div class="right">
                <div class="item-top"></div>
                <div class="item-bottom"></div>
              </div>
            </div>
          </template>
        </ShopCard>
      </div>
      <div class="shopCard-2">
        <ShopCard>
          <template v-slot:title>
            <div class="headerTitle">
              <span>类目热销榜</span>
            </div>
          </template>
          <template v-slot:content>
            <div class="middle">
              <div class="item-t">
                <a v-for="(item,index) in 2" :key="index">
                  <span class="name">{{item}}</span>
                  <img src="" alt="">
                </a>
              </div>
              <div class="item-b">
                <a href="" v-for="(item,index) in 8" :key="index">
                  <span class="name">{{item}}</span>
                  <img src="" alt="">
                </a>
              </div>
            </div>
          </template>
        </ShopCard>
      </div>
      <div class="shopCard-3">
        <ShopCard>
          <template v-slot:title>
            <div class="headerTitle">
              <div class="left">
                <span>限时购</span>
                <div class="time">00:00:00</div>
              </div>
              <div class="right">
                <span class="more">更多</span>
                <i class="iconfont iconxuanxiangqiayoujiantou"></i>
              </div>
            </div>
          </template>
          <template v-slot:content>
            <div class="middle">
              <a href="" v-for="(item,index) in 6" :key="index">
                <img src="" alt="">
                <div class="price">
                  <span>￥179</span>
                  <s>￥199</s>
                </div>
              </a>
            </div>
          </template>
        </ShopCard>
      </div>
      <div class="shopCard-4">
        <ShopCard>
          <template v-slot:title>
            <div class="headerTitle">
              <div class="left">
                <span>新品首发</span>
              </div>
              <div class="right">
                <span class="more">更多</span>
                <i class="iconfont iconxuanxiangqiayoujiantou"></i>
              </div>
            </div>
          </template>
          <template v-slot:content>
            <div class="middle">
              <a href="" v-for="(item,index) in 6" :key="index">
                <img src="" alt="">
                <div class="name">
                  <span>冰封住的绵密香甜，泰国金枕榴莲冻肉 300克</span>
                </div>
                <span class="price">￥59</span>
                <div class="specialPrice">
                  <span>特价</span>
                </div>
              </a>
            </div>
          </template>
        </ShopCard>
      </div>
      <div class="shopCard-5">
        <ShopCard>
          <template v-slot:content>
            <div class="middle">
              <a href="" v-for="(item,index) in 4" :key="index">
                <div class="item-title">无限回购榜单</div>
                <div class="item-desc">买了又买的超值好物</div>
                <div class="picList">
                  <img class="pic" src="" v-for="(item,index) in 2" :key="index">
                </div>
              </a>
            </div>
          </template>
        </ShopCard>
      </div>
    </div>

    <div class="test"></div>
  </div>
</template>

<script>
  import Swiper from '../../components/Swiper/Swiper'
  import Scroll from '../../components/Scroll/Scroll'
  import ClassList from '../../components/ClassList/ClassList'
  import ShopCard from '../../components/ShopCard/ShopCard'

  import bigPromotion from '../../common/datas/index.json'

  export default {
    components:{
      Swiper,
      Scroll,
      ClassList,
      ShopCard
      },
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
  .headerContainer
    position absolute
    left 0
    top 0
    z-index 99
    background #fff
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
  .footer
    font-size 16px
    .bigPromotionModule
      width 100%
      height 414px
      background #1674e3
      .promotion
        width 100%
        display flex
        &:first-child
          width 100%
          height 120px
          .cellContainer
            height 120px
            .cell
              display block
              width 100%
              height 120px
              img 
                width 100%
                height 120px
        &:nth-child(2)
          margin 10px 10px 0 10px
          height 80px
          .cellContainer
            width 355px
            height 80px
            .cell
              display block
              width 355px
              height 80px
              img 
                width 100%
                height 80px
        &:nth-child(3)
          margin 5px 10px 5px 10px
          height 93px
          .cellContainer
            width 175px
            height 93px
            &:first-child
              margin-right 5px
            .cell
              display block
              width 175px
              height 93px
              img 
                width 175px
                height 93px
        &:nth-child(4)
          margin 0 10px
          height 93px
          .cellContainer
            width 175px
            height 93px
            &:first-child
              margin-right 5px
            .cell
              display block
              width 175px
              height 93px
              img 
                width 175px
                height 93px
    
    .shopCard-1
      .margin-top 
        width 100%
        height 10px
        background #eee
      .headerTitle
        width 100%
        height 45px
        padding 0 15px
        box-sizing border-box 
        display flex
        justify-content center
        span 
          height 45px
          display flex
          align-items center
          &:before
            content ''
            display block
            width 16px
            height 1px
            background #333
            margin-right 10px
          &:after
            content ''
            display block
            width 16px
            height 1px
            background #333
            margin-left 10px

      .middle
        width 100%
        height 219px
        box-sizing border-box
        display flex
        justify-content space-between 
        .left
          width 171px 
          height 219px
          background #987
        .right
          width 171px 
          height 219px
          display flex
          flex-direction column
          justify-content space-between 
          .item-top
            width 100%
            height 108px
            background #456
          .item-bottom
            width 100%
            height 108px
            background #600
    
    .shopCard-2
      .headerTitle
        width 100%
        height 50px
        line-height 50px
        padding 0 15px
        box-sizing border-box 
      .middle
        width 100%
        height 305px
        .item-t
          width 100%
          height 100px
          display flex
          justify-content space-between
          a
            display block
            width 170px
            height 100px
            background #456
        .item-b
          width 100%
          height 205px
          display flex
          flex-wrap wrap
          justify-content space-between
          padding 5px 0
          box-sizing border-box
          a
            display block
            width 83px
            height 90px
            background #567
    
    .shopCard-3
      .headerTitle
        width 100%
        height 50px
        line-height 50px
        padding 0 15px
        color #333
        box-sizing border-box 
        display flex
        justify-content space-between
        .left
          display flex
          .time
            box-sizing border-box
            margin 2px 0 0 6px
        .right
          font-size 14px
          .iconfont
            font-size 14px
            margin-left 2px
      .middle
        width 100%
        height 300px
        display flex
        flex-wrap wrap
        justify-content space-between
        a
          display block
          width 108px
          height 135px
          img 
            display block
            width 108px
            height 108px
            background #336699
          .price
            width 100%
            height 21px
            line-height 21px
            margin-top 3px
            span 
             font-size 14px
             color #dd1a21
            s 
              font-size 12px
              color #7f7f7f

    .shopCard-4
      .headerTitle
        width 100%
        height 50px
        line-height 50px
        padding 0 15px
        color #333
        box-sizing border-box 
        display flex
        justify-content space-between
        .left
          display flex
        .right
          font-size 14px
          .iconfont
            font-size 14px
            margin-left 2px
      .middle
        width 100%
        height 398px
        display flex
        flex-wrap wrap
        justify-content space-between
        a
          display inline-block
          width 108px
          height 190px
          img 
            display block
            width 108px
            height 108px
            background #f5f5f5
            margin-bottom 3px
          .name
            width 108px
            height 36px
            font-size 12px
            color #333
            overflow hidden
            white-space normal
            span
              line-height 18px
          .price
            font-size 16px
            color #dd1a21
          .specialPrice
            span 
              padding 0 4px
              color #dd1a21
              border 1px solid #dd1a21
              background rgba(255,255,255,0.9)  
              border-radius 8px
              font-size 9px
    
    .shopCard-5
      .middle
        width 100%
        height 268px
        margin-top 5px
        display flex
        flex-wrap wrap 
        justify-content space-between
        a
          width 162px
          height 122px
          display inline-block
          background #f5f5f5
          padding 9px 0 0 9px
          .item-title
            font-size 16px
            height 24px
            line-height 24px
            color #333
            padding-left 5px
          .item-desc
            height 18px
            line-height 18px
            color #7f7f7f
            font-size 12px
            padding-left 5px
          .picList
            .pic
              width 75px
              height 75px
              margin-right 2px
              background #ddd






          







  
  .test
    height 100px
    background #dd1a21    


</style>
