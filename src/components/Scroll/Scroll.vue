<template>
    <div class="wrapper">
        <ul class="content">
            <li class="navItem">推荐</li>
            <li @click="toHome" class="navItem" v-for="(item,index) in navData" :key="index">{{item.name}}</li>
        </ul>
    </div>
</template>

<script>
  import BScroll from '@better-scroll/core'
  import navData from '../../common/datas/indexCateModule.json'
  export default {
    data(){
        return{
           navData 
        }
    },
    methods:{
        toHome(){
            // http://m.you.163.com/item/list?categoryId=1005000
        }
    },
    mounted(){
        new BScroll( '.scroll .wrapper', {
            scrollX: true
            // click: true
        })
   }
  }
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>
    .wrapper
      width 325px
      height 30px 
      display flex
      overflow hidden
      .content
        display flex
        flex-wrap nowrap
        white-space nowrap
        height 30px 
        .navItem
          height 30px
          line-height 30px
          padding 0 8px
          color #333
          font-size 14px
          margin-left 10px
          position relative
          &:after
            content:''
            display block
            width 100%
            height 2px
            position absolute
            left 0
            bottom 0
            background #dd1a21
            color #dd1a21
            // &.active
            //   background #dd1a21
            //   color #dd1a21
          &:nth-child(1)
            margin-left 15px 
    
 
</style>
