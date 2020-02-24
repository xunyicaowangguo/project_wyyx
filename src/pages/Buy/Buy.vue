<template>
  <div id="container">
    <div class="header">
      <i class="iconfont iconhome1" @click="$router.push('/home')"></i>
      <div class="title">值得买</div>
      <i class="iconfont icongouwuche3"></i>
      <i class="iconfont iconsearch" @click="$router.push('/search')"></i>
    </div>
    <div class="swiperTabContainer">
      <div class="swiperTabTitle">
        <img src="http://m.you.163.com/topic/index/img/topic_logo.c2284970.png" class="titleImg">
        <div class="text">严选好物 用心生活</div>
        <img src="http://m.you.163.com/topic/index/img/topic_title_bg.2373a140.png" class="backImg">
      </div>
      <div class="swiperTab">
        <a class="swiperHref" href="">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(buyNavItem,index) in buyNavList" :key="index">
                <div class="swiper-group">
                  <a class="swiperItem" :href="buyNavItem[0].columnUrl">
                    <div class="swiperImg">
                      <img :src="buyNavItem[0].picUrl">
                    </div>
                    <div class="detail">
                      <div class="mainText">{{buyNavItem[0].mainTitle}}</div>
                      <div class="descText">{{buyNavItem[0].viceTitle}}</div>
                    </div>
                  </a>
                  <a class="swiperItem swiperItem-2" :href="buyNavItem[1].columnUrl">
                    <div class="swiperImg">
                      <img :src="buyNavItem[1].picUrl">
                    </div>
                    <div class="detail">
                      <div class="mainText">{{buyNavItem[1].mainTitle}}</div>
                      <div class="descText">{{buyNavItem[1].viceTitle}}</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>        
          </div>
        </a>
      </div>
    </div>
    <!-- <WaterFall ref="waterfall"/> -->
    <div class="waterfallwrap">
      <waterfall :col='col' :width="width" :gutterWidth="gutterWidth" :data="data" @loadmore="loadmore" @scroll="scroll">
        <template>
          <div class="cell-item" v-for="(item, index) in data" :key="index">
            <img :src="item.topics[0].picUrl" alt="" class="img">
            <div class="line1" >
              {{item.topics[0].title}}
            </div>
            <div class="line2">
              <div class="userInfo">
                <img :src="item.topics[0].avatar" alt="" class="avt">
                <div class="name">{{item.topics[0].nickname}}</div>
              </div>
              <div class="see">
                <img class="seeImg" src="data:image/png;base64,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" alt="">
                <div class="seeText">{{item.topics[0].readCount}}</div>
              </div>
            </div>
          </div>
        </template>
      </waterfall>
    </div>
  </div>
</template>

<script>
  // import WaterFall from '../../components/WaterFall/WaterFall'
  // import waterFallData from '../../common/datas/waterFall.json'
  import Swiper from 'swiper'
  import 'swiper/css/swiper.min.css'
  import axios from 'axios'

  export default {
    data(){
      return{
        buyNavList:[],
        // waterFallData:[],
        width:355,
        gutterWidth:11,
        data:[],
        col:2
      }
    },
    async mounted(){
      this.$nextTick(()=>{
        new Swiper('.swiper-container',{
          observer: true,
          observeParents: true,
          slidesPerView : 4,
          pagination: {
              el: '.swiper-pagination',
          },
        })
      })
      
      this.buyNavList = await this.$API.getBuyNavList()

      // this.waterFallData = waterFallData.data
      // console.log(this.waterFallData)
      // this.$refs.waterfall.setData(this.waterFallData)
      // console.log(this.$refs.waterfall)

      this.getData()
      // this.loadmore()
      var _this = this;
      window.addEventListener('scroll', function(){
      var scr = document.documentElement.scrollTop || document.body.scrollTop; // 向上滚动的那一部分高度
      var clientHeight = document.documentElement.clientHeight; // 屏幕高度也就是当前设备静态下你所看到的视觉高度
      var scrHeight = document.documentElement.scrollHeight || document.body.scrollHeight; // 整个网页的实际高度，兼容Pc端
      // console.log(scr,clientHeight,scrHeight);
      if(scr + clientHeight + 10 >= scrHeight){
          // if(_this.isMoreLoad){ //this.isMoreLoad控制滚动是否加载更多
          //     _this.definePageNum = _this.definePageNum + 1; // 加载更多是definePageNum+1
          
          // }else{
          //     return;
          // }
          _this.loadmore();
      }
      });

    },
    methods: {
        
      getData(){
          let url = "/buy/topic/v1/find/recManual.json"
          axios.get(url).then((res)=>{
              // console.log(res.data.data);
              this.data = res.data.data
              
          })
      },
      scroll(scrollData){
          // console.log(scrollData)
      },
      switchCol(col){
          this.col = col
          console.log(this.col)
      },
      loadmore(){
          let url = "/buy/topic/v1/find/recAuto.json"
          axios.get(url).then((res)=>{
              console.log(res.data.data.result);
              this.data = this.data.concat(res.data.data.result)
          })
      }
  },
}
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>
  #container
    .header
      width 350px
      height 50px
      padding 0 12px 0 13px
      line-height 50px
      background #fff
      position fixed
      left 0
      top 0
      z-index 99
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

    .swiperTabContainer
      width 375px
      height 343px
      background #eee
      position relative
      margin-top 50px
      .swiperTabTitle
        width 375px
        height 259px
        position relative
        .titleImg
          width 65px
          height 35px
          position absolute
          left 6px
          top 30px
          z-index 9
        .text
          font-size 15px
          color #fff
          display inline-block
          height 20px
          position absolute
          left 73px
          top 43px
          z-index 9
        .backImg
          width 375px
          height 259px
          position absolute
          left 0
          top 0

      .swiperTab
        width 355px
        height 270px
        margin 0 10px
        position absolute
        left 0
        top 73px
        background #fff
        border-radius 8px
        .swiperHref
          display block
          width 355px
          height 270px
          .swiper-container
            width 355px
            height 270px
            .swiper-wrapper
              width 355px
              height 270px
              .swiper-slide
                width 90px
                height 270px
                .swiper-group
                  width 84px
                  height 214px
                  margin 18px 3px 3px
                  .swiperItem-2
                    margin-top 14px
                  .swiperItem
                    width 84px
                    height 100px
                    display block
                    .swiperImg
                      background #ccc
                      width 60px
                      height 60px
                      margin 0 12px
                      border-radius 50%
                      img
                        width 60px
                        height 60px 
                    .detail
                      width 84px
                      height 36px
                      margin-top 4px
                      text-align center
                      .mainText
                        font-size 14px
                        color #333
                        height 20px
                        line-height 20px
                        font-weight bold
                      .descText
                        font-size 10px
                        color #999
                        height 15px
                        line-height 15px
                        margin-top 1px

    
    .waterfallwrap
        background #eee
        width 100%
        height 100%
        padding  15px 10px 0
        box-sizing border-box
        .cell-item
            margin 3px
            display inline-block
            width 170px
            background-color #fff
            border-radius 8px
            overflow hidden
            margin-bottom 10px
            .img
                width 170px
            .line1
                width 170px
                box-sizing border-box
                padding 9px 8px 0
                font-size 14px
                line-height 20px
                color #333
            .line2
                width 170px
                height 45px
                box-sizing border-box
                padding 8px 8px 6px
                display flex
                justify-content space-between
                align-items center
                .userInfo
                    // width 52px
                    height 24px
                    display flex
                    .avt
                        width 24px
                        height 24px
                        border 1px solid #d9d9d9
                        border-radius 50%
                    .name
                        // width 24px
                        height 24px
                        color #7f7f7f
                        font-size 12px
                        line-height 24px
                        margin-left 4px
                        overflow hidden
                .see
                    // width 50px
                    height 29px
                    display flex
                    display flex
                    align-items center
                    .seeImg
                        width 16px
                        height 16px
                    .seeText                          
                        height 16px
                        line-height 16px
                        font-size 12px     
                        color #7f7f7f

</style>
