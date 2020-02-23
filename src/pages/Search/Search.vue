<template>
  <div id="searchContainer">
      <div class="searchContent">
        <div class="searchTop">
          <div v-if="datas.defaultKeyword" class="inputContainer">
            <i class="icon iconfont icon-search1"></i>
            <input type="text" :placeholder="datas.defaultKeyword.keyword"/>
          </div>
          <span @click="goToLast">取消</span>
        </div>
        <div class="searchBottom">
          <div class="header">
            <h3>热门搜索</h3>
          </div>
          <div class="list">
            <div v-for="(item, index) in datas.hotKeywordVOList" :key="index" class="listItem" :class="item.highlight?'highlight':''">
              <span>{{datas.hotKeywordVOList[index].keyword}}</span>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        datas:[]
      }
    },
    methods: {
      getDatas(){
        let url = "/buy/xhr/search/init.json"
        axios.get(url).then((res)=>{
            // console.log(res.data.data)
            this.datas = res.data.data
        })
      },
      goToLast(){
        this.$router.go(-1);
      }
    },
    mounted() {
      this.getDatas()
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #searchContainer
    width 375px
    height 100%
    white-space nowrap
    position absolute
    left 0
    top 0
    background #eee
    z-index 10
    .searchContent
      width 375px
      background-color #fff
      height 100%
      .searchTop
        display flex
        width 375px
        height 44px
        line-height 44px
        border 1px solid #fff
        box-sizing border-box
        padding 0 15px
        .inputContainer
          display flex
          width 302px
          height 28px
          line-height 28px
          background #f4f4f4
          box-sizing border-box
          padding 0 10px
          margin auto 0
          .iconfont
            font-size 14px
            color rgba(0,0,0,0.8)
            box-sizing border-box
            margin 0 8px 0 0
          input 
            width 260px
            height 20px
            font-size 14px
            background #f4f4f4
            box-sizing border-box
            color rgba(0,0,0,0.8)
            padding 0 0 0 1px
            margin auto 0 
        span 
          width 28px
          height 21px
          color #333
          font-size 14px
          margin 0 0 0 15px
      .searchBottom
        width 375px
        height 218px
        .header
          width 345px
          height 45px
          line-height 45px
          margin 0 auto
          h3
            font-size 14px
            color #999
        .list
          display flex
          flex-wrap wrap
          width 100%
          box-sizing border-box
          padding 0 15px 15px
          .listItem
            display block
            font-size 12px
            color #333
            line-height 23px
            margin 0 16px 16px 0
            padding 0 8px
            border 1px solid #999
            border-radius 2px
          .highlight
            border-color #dd1a21
            color #dd1a21

</style>
