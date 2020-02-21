<template>
    <div class="wrapper">
        <ul class="content">
            <li class="navItem" @click="activeName='推荐'"  :class="{active:activeName=='推荐'?true:false}">推荐</li>
            <li @click="activeName=item.name" :class="{active:activeName==item.name?true:false}" v-for="(item) in navData" :key="item.name">{{item.name}}</li>
        </ul>
    </div>
</template>

<script>
  import BScroll from '@better-scroll/core'
  import navData from '../../common/datas/indexCateModule.json'
  export default {
    data(){
        return{
           navData:[],
           activeName:'推荐'
        }
    },
    mounted(){
      this.navData = navData
      this.$nextTick(()=>{
        new BScroll( '.wrapper', {
            scrollX: true,
            click: true
        })
      })        
    }
  }
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>
    .wrapper
      position absolute
      width 325px
      height 30px 
      display flex
      overflow hidden
      .content
        display flex
        flex-wrap nowrap
        white-space nowrap
        height 30px 
        li
          height 30px
          line-height 30px
          padding 0 8px
          color #333
          font-size 14px
          margin-left 10px
          position relative
          &.active
            color #dd1a21
            &:after
                content:''
                display block
                width 100%
                height 2px
                position absolute
                left 0
                bottom 0
                background #dd1a21
          &:nth-child(1)
            margin-left 15px 
    
 
</style>
