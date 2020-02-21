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
              <div class="left">
                <a href="https://m.you.163.com/gift/newWapUserGift">
                  <div class="title">新人专享礼包</div>
                  <img src="https://yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png">
                </a>
              </div>
              <div class="right">
                <div class="item-top">
                  <a href="https://m.you.163.com/saleCenter/index">
                    <div class="title">福利社</div>
                    <div class="subTitle">今日特价</div>
                    <img src="https://yanxuan-item.nosdn.127.net/f961b628a67e5a95150b962a48963b6d.png">
                  </a>                
                </div>
                <div class="item-bottom">
                  <a href="https://m.you.163.com/pin/item/list">
                    <div class="title">新人拼团</div>
                    <div class="subTitle">1元起包邮</div>
                  </a>  
                </div>
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

              <div class="item" v-for="(categoryItem,index) in categoryList" :key="index">
                <a :href="item.targetUrl" v-for="(item,index) in categoryItem.categorys" :key="index">
                  <div class="name">{{item.categoryName}}</div>
                  <img :src="item.picUrl">
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
                <CountTime/>
              </div>
              <div class="right">
                <span class="more">更多</span>
                <i class="iconfont iconxuanxiangqiayoujiantou"></i>
              </div>
            </div>
          </template>
          <template v-slot:content>
            <div class="middle">
              <a href="" v-for="(item,index) in flashSaleList" :key="index">
                <img :src="item.picUrl">
                <div class="price">
                  <span>￥{{item.activityPrice}}</span>
                  <s>￥{{item.originPrice}}</s>
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
              <a href="" v-for="(item,index) in newItemList" :key="index">
                <img :src="item.showPicUrl" alt="">
                <div class="name">
                  <span>{{item.name}}</span>
                </div>
                <span class="price">￥{{item.retailPrice}}</span>
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
              <a href="" v-for="(item,index) in sceneLightShoppingList" :key="index">
                <div class="item-title">{{item.styleItem.title}}</div>
                <div class="item-desc">{{item.styleItem.desc}}</div>
                <img class="pic" :src="picItem" v-for="(picItem,index) in item.styleItem.picUrlList" :key="index">
              </a>
            </div>
          </template>
        </ShopCard>
      </div>
    </div>
    <div class="bottomContainer">
      <div class="bottom">
        <div class="down">
          <a href="">下载APP</a>
          <a href="">电脑版</a>
        </div>
        <div class="copyright">
          <p>网易公司版权所有 © 1997-2020</p>
          <p>食品经营许可证：JY13301080111719</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from '../../components/Swiper/Swiper'
  import Scroll from '../../components/Scroll/Scroll'
  import ClassList from '../../components/ClassList/ClassList'
  import ShopCard from '../../components/ShopCard/ShopCard'
  import CountTime from '../../components/CountTime/CountTime'

  import indexData from '../../common/datas/index.json'

  export default {
    components:{
      Swiper,
      Scroll,
      ClassList,
      ShopCard,
      CountTime
      },
    data(){
      return {
         bigPromotionData: [],
         indexActivityModule: [],
         categoryList: [],
         flashSaleList: [],
         newItemList: [],
         sceneLightShoppingList: [],
      }
    },
    mounted(){
      this.bigPromotionData = indexData.bigPromotionModule.floorList
      this.indexActivityModule = indexData.indexActivityModule
      this.categoryList = indexData.categoryHotSellModule.categoryList
      this.flashSaleList = indexData.flashSaleModule.itemList
      this.newItemList = indexData.newItemList
      this.sceneLightShoppingList = indexData.sceneLightShoppingGuideModule
    }
  }
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>
@import '../../common/stylus/mixins.styl'

#container
  width 375px
  height 100%
  .headerContainer
    width 100%
    position fixed
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
        width 220px
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
        width 36px
        height 20px
        color #dd1a21
        line-height 20px
        text-align center
        border: 1px solid #DD1A21;
        border-radius 5px
        font-size 12px
    .scroll
      position relative  
      .toggle
        text-align center
        line-height 30px
        width 50px
        height 30px
        background #fff
        padding-left 30px
        position absolute
        right 0
        top 0

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
              height 120px
              img 
                width 375px
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
          background #F9E9CF
          a
            display block
            width 100%
            height 100%
            .title
              color #333
              font-size 16px
              padding 15px 0 30px 15px
            img 
              width 129px
              height 129px
              margin-left 21px
        .right
          width 171px 
          height 219px
          display flex
          flex-direction column
          justify-content space-between 
          .item-top
            width 100%
            height 108px
            position relative
            background #FBE2D3
            a
              display block
              width 100%
              height 100%
              padding 10px 0 0 15px
              box-sizing border-box
              .title
                height 24px
                color #333
                font-size 16px
                line-height 24px
              .subTitle
                height 18px
                color #7f7f7f
                font-size 12px
                line-height 18px
              img 
                position absolute
                right 0
                bottom 0
                width 100px
                height 100px
          .item-bottom
            width 100%
            height 108px
            background #FFECC2
            a
              display block
              width 100%
              height 100%
              padding 10px 0 0 15px
              box-sizing border-box
              .title
                height 24px
                color #333
                font-size 16px
                line-height 24px
              .subTitle
                height 18px
                color #7f7f7f
                font-size 12px  
                line-height 18px

    
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
        .item
          &:nth-child(1)
            width 100%
            height 100px
            display flex
            justify-content space-between
            a
              display block
              width 170px
              height 100px
              color #333
              position relative
              &:nth-child(1)
                background #f9f3e4
              &:nth-child(2)
                background #ebeff6
              .name
                font-size 14px 
                height 21px
                margin 33px 0 0 12px
                position relative
                line-height 21px
                &:after
                  display block
                  content ''
                  width 24px
                  height 2px
                  background #333
                  position absolute
                  left 0
                  bottom -8px
              img 
                width 100px
                height 100px
                position absolute
                right 0
                bottom 0
          &:nth-child(2)
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
              background #f5f5f5
              color #333
              .name
                font-size 12px 
                displa block
                margin-top 5px
                text-align center
                height 18px
                line-height 18px
              img 
                width 60px
                height 60px
                float right
                margin 5px 10px 0
    
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
          span
            margin-right 5px
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
             margin-right 5px
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
          .pic
            width 75px
            height 75px
            margin-right 1px






          







  
  .bottomContainer
    width 100%
    height 122px
    margin-bottom 50px
    padding 27px 10px 14px
    box-sizing border-box
    border-top 1px solid rgba(0,0,0,.15);
    background-color #414141
    .bottom
      width 100%
      height 81px
      .down
        padding 0 76px
        a
          display inline-block
          width 86px
          height 31px
          border 1px solid #999
          border-radius 4px
          color #ffffff
          text-align center
          line-height 31px
          &:first-child
            margin-right 25px
      .copyright
        margin-top 13px
        p
          color #999
          text-align center
          line-height 14px
          font-size 12px
          padding 2px

</style>
