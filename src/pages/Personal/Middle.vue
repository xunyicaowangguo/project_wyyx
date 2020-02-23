<template>
    <div class="middle">
        <div class="logowrap">
            <img class="logo" src="//yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png">
        </div>
        <div class="logintype">
            <div class="phonetype" @click="$router.push('/personal/phoneLogin')">
                <i class="iconfont iconshoujidenglu"></i>
                <span class="text">手机号快捷登录</span>
            </div>
            <div class="mailtype" @click="$router.push('/personal/mailLogin')">
                <i class="iconfont iconyouxiangdenglu"></i>
                <span class="text">邮箱账号登录</span>
            </div>
        </div>
        <div class="foot">
            <div class="wx">
                <i class="iconfont iconweixin"></i>
                <span>微信</span>
            </div>
            <div class="qq">
                <i class="iconfont iconqq2"></i>
                <span>QQ</span>
            </div>
            <div class="wb">
                <i class="iconfont iconweibo"></i>
                <span>微博</span>
            </div>
        </div>
    </div> 
</template>

<script>
  export default {
  }
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>
.middle
    width 375px
    height 623px
    background #f2f5f4
    .logowrap
        width 375px
        height 45px
        padding 80px 0 116px
        text-align center
        .logo 
            width 134px
            height 45px
    .logintype
        padding 0 20px
        width 335px
        height 110px
        .phonetype
            width 335px
            height 47px
            background #dd1a21
            color #fff
            margin-bottom 16px
            border-radius 4px
            display flex
            justify-content center
            line-height 47px
            .iconfont
                font-size 20px
                margin-right 8px
            .text
                font-size 14px
        .mailtype
            width 333px
            height 45px
            color #dd1a21
            display flex
            justify-content center
            line-height 45px
            border-radius 4px
            border 1px solid #dd1a21 
            .iconfont
                font-size 20px
                margin-right 8px
            .text
                font-size 14px
    .foot      
        font-size 14px
        color #7f7f7f
        text-align center
        width 375px
        height 20px
        padding 212px 0 40px
        div
            display inline-block
            padding 0 20px
            height 20px
            line-height 20px
            span 
                margin-left 4px
            .iconfont
                font-size 17px
            .qq
                border-left 1px solid #979797
                border-right 1px solid #979797
 
</style>
