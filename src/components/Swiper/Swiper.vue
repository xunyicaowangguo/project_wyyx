<template>
  <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(imgItem,index) in swiperImg" :key="index">
                <img :src="imgItem.imgUrl">
            </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
        
        
        
    </div>
</template>

<script>
    import Swiper from 'swiper'
    import 'swiper/css/swiper.min.css'
    import swiperImg from '../../common/datas/indexCateModule.json'

    export default {
        data(){
            return{
                swiperImg:[]
            }
        },
        mounted(){
            this.swiperImg = swiperImg
            new Swiper('.swiper-container',{
                direction: 'horizontal', // 垂直切换选项
                observer: true,
                observeParents: true,
                loop: true, // 循环模式选项
                autoplay: true,
                // 如果需要分页器
                pagination: {
                    el: '.swiper-pagination',
                    // custom:   //自定义样式
                },
                
               
          })
      }
  }
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>
.swiper-container 
    width 375px
    height 185px
    .swiper-wrapper
        width 375px
        height 185px
        img
            display block
            width 375px
            height 185px
</style>
