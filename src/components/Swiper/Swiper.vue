<template>
  <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img src="https://yanxuan.nosdn.127.net/100b633b1b237e0102458bbf4d851cb9.jpg?type=webp&amp;imageView&amp;quality=75&amp;thumbnail=375x0">
            </div>
            <div class="swiper-slide">
                <img src="https://yanxuan.nosdn.127.net/701376163c509d740714fa16dee8ecc7.jpg?type=webp&amp;imageView&amp;quality=75&amp;thumbnail=375x0">
            </div>
            <div class="swiper-slide">
                <img src="https://yanxuan.nosdn.127.net/032617a78bd1eb5a7e056e016fec1f24.jpg?type=webp&amp;imageView&amp;quality=75&amp;thumbnail=375x0">
            </div>
            <div class="swiper-slide">
                <img src="https://yanxuan.nosdn.127.net/6b1ebd19470cea9a7b8e81a52485f414.jpg?type=webp&amp;imageView&amp;quality=75&amp;thumbnail=375x0">
            </div>
            <div class="swiper-slide">
                <img src="https://yanxuan.nosdn.127.net/fbdf6fb0eedb27d0adc33c5bc105b5f5.jpg?type=webp&amp;imageView&amp;quality=75&amp;thumbnail=375x0">
            </div>
            <div class="swiper-slide">
                <img src="https://yanxuan.nosdn.127.net/3d4fbbc11172e79e3842671c447daea9.jpg?type=webp&amp;imageView&amp;quality=75&amp;thumbnail=375x0">
            </div>
            <div class="swiper-slide">
                <img src="https://yanxuan.nosdn.127.net/36929e72018bce053af17a80a262c4bb.jpg?type=webp&amp;imageView&amp;quality=75&amp;thumbnail=375x0">
            </div>
            <div class="swiper-slide">
                <img src="https://yanxuan.nosdn.127.net/c6a5af1034122a96a38fafd4b1ef2e7d.jpg?type=webp&amp;imageView&amp;quality=75&amp;thumbnail=375x0">
            </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
        
        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
        
        <!-- 如果需要滚动条 -->
        <div class="swiper-scrollbar"></div>
    </div>
</template>

<script>
    import Swiper from 'swiper'
    export default {
        mounted(){
            new Swiper('.swiper-container',{
                direction: 'horizontal', // 垂直切换选项
                loop: true, // 循环模式选项
                
                // 如果需要分页器
                pagination: {
                    el: '.swiper-pagination',
                },
                
                // 如果需要滚动条
                scrollbar: {
                    el: '.swiper-scrollbar',
                },
          })
      }
  }
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>
.swiper-container 
    width 100%
    height 185px
    .swiper-wrapper
        width 100%
        height 185px
        backgroud #bd9
        .img
            width 100%
            height 185px
            

 
</style>
