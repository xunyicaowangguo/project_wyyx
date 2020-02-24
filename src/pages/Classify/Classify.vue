<template>
  <div id="classContainer">
      <div class="header">
        <div class="search" @click="$router.push('/search')">
          <i class="iconfont iconsearch"></i>
          <span>搜索商品，共22029款好物</span>
        </div>
      </div>
      <div class="main">
        <div class="left">
          <div class="cateNavwrapper">
            <ul class="content">
              <li class="cateItem" 
                  v-for="(item,index) in cateNav" 
                  :key="index"
                  :class="{active: activeIndex==index?true:false}" 
                  @click="isActive(index)">
                  {{item.name}}
              </li>
            </ul>
          </div>
        </div>
        <div class="right">
          <div class="cateListwrapper">
            <div class="cateScroll">
              <div class="content" v-show="activeIndex==index" v-for="(item,index) in cateLists" :key="index">
                <div class="pic">
                  <img :src="item.imgUrl">
                </div>
                <div class="goodsList">
                  <ul class="list" v-if="item.categoryList">
                    <li class="goodItem" v-for="(categoryItem,index) in item.categoryList" :key="index">
                      <img :src="categoryItem.bannerUrl">
                      <div class="name">
                        <span>{{categoryItem.name}}</span>
                      </div>
                    </li>
                  </ul>
                  <ul class="list" v-if="item.subCateList">
                    <li class="goodItem" v-for="(subCateItem,index) in item.subCateList" :key="index">
                      <img :src="subCateItem.wapBannerUrl">
                      <div class="name">
                        <span>{{subCateItem.name}}</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
  import cateNav from '../../common/datas/cateNavDatas.json'
  import cateLists from '../../common/datas/cateLists.json'
  import BScroll from '@better-scroll/core'
  export default {
    data(){
      return {
        cateNav: [],
        activeIndex: 0,
        cateLists: [],
      }
    },
    methods:{
      isActive(index){
        this.activeIndex = index
      }
    },
    mounted(){
      this.cateNav = cateNav.categoryL1List
      this.cateLists = cateLists
      this.$nextTick(()=>{
        let leftScroll = new BScroll( '.left .cateNavwrapper', {
            scrollY: true,
            click: true
        })
        let rightScroll = new BScroll( '.right .cateListwrapper', {
            scrollY: true,
            click: true
        })
      })    
    }
  }
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>

@import '../../common/stylus/mixins.styl'

#classContainer
  .header
    width 345px
    height 44px
    padding 0 15px
    bottom-border-1px(#ddd)
    position fixed
    left 0
    top 0
    z-index 10
    background #fff
    .search
      width 345px
      height 28px
      border-radius 4px
      background #ededed
      margin 8px 0
      text-align center
      line-height 28px
      .iconfont
        font-size 14px
        margin-right 5px
      span 
        font-size 14px
        color #666

  .main
    width 375px
    height 573px
    padding 44px 0 50px
    position relative
    .left
      width 81px
      height 534px
      right-border-1px(#ddd)
      padding 20px 0
      .cateNavwrapper
        height 534px
        .content
          width 81px
          height 536px
          .cateItem
            width 81px
            height 25px
            line-height 25px
            text-align center
            margin-top 20px
            font-size 14px
            position relative
            color #333
            &.active
              color #ab2b2b
              &:before
                display block
                content ''
                width 3px
                height 25px
                position absolute
                left 0
                top 0
                background #ab2b2b
            &:first-child
              margin-top 0
          
            
                  
    .right
      position absolute
      right 0
      top 44px
      width 294px
      height 574px
      margin-left 81px
      box-sizing border-box
      padding 15px 15px 10px
      .cateListwrapper
        height 549px
        .cateScroll
          .content
            // overflow hidden
            // float right
            width 264px
            // height 800px
            .pic
              width 264px
              height 96px
              margin-bottom 15px
              img
                width 264px
                height 96px
            .goodsList
              width 264px
              height 437px 
              .list
                display flex
                flex-wrap wrap
                .goodItem
                  margin-bottom 4px
                  width 72px
                  height 108px
                  &:nth-child(3n+2)
                    margin 0 17px 4px
                  img
                    display block
                    width 72px
                    height 72px
                  .name
                    width 72px
                    height 36px
                    text-align center
                    font-size 12px
                    line-height 16px
                    color #333
                      


              





 
</style>
