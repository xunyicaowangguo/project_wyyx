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
    <WaterFall ref="waterfall"/>
  </div>
</template>

<script>
  import WaterFall from '../../components/WaterFall/WaterFall'
  import waterFallData from '../../common/datas/waterFall.json'
  import Swiper from 'swiper'
  import 'swiper/css/swiper.min.css'
  export default {
    components:{WaterFall},
    data(){
      return{
        buyNavList:[],
        waterFallData:[],
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
      // eslint-disable-next-line no-console
      // console.log(this.buyNavList)
      this.waterFallData = waterFallData.data
      // eslint-disable-next-line no-console
      console.log(this.waterFallData)
      this.$refs.waterfall.setData(this.waterFallData)
      // eslint-disable-next-line no-console
      console.log(this.$refs.waterfall)
    }
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

    
    .main
      background #bfa
      width 355px
      height 900px
      padding 15px 10px 50px
</style>
