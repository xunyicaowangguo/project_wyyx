<template>
  <div id="container">
      <a :href="item.schemeUrl" class="kingKongList" v-for="(item,index) in kingKongList" :key="index">
          <img :src="item.picUrl" alt="">
          <div class="txt">{{item.text}}</div>
      </a>
  </div>
</template>

<script>
  import kingKongData from '../../common/datas/index.json'
  export default {
      data(){
          return{
              kingKongList: []
          }
      },
      mounted(){
          this.kingKongList = kingKongData.kingKongModule.kingKongList
          
      }
  }
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>
#container
    width 100%
    height 170px
    display flex
    flex-wrap wrap
    .kingKongList
        width 55px
        height 78px
        margin 5px 10px
        display flex
        flex-direction column
        img 
            width 55px
            height 55px
        .txt
            width 55px
            height 12px
            text-align center
            margin-top 5px
            color #333
            font-size 12px
 
</style>
