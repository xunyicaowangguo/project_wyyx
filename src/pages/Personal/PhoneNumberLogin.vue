<template>
    <div id="phoneLoginWrap">
        <div class="phoneview">
            <div class="logowrap">
                <img class="logo" src="//yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png">
            </div>
            <div class="userBox">
                <div class="uesrBoxContent">
                    <form>
                        <div class="phoneLogin">
                            <div class="phonenumber">
                                <input type="text" name="phone" placeholder="请输入手机号" v-model="phone" v-validate="'required|phone'">
                                <span style="color: red;" v-show="errors.has('phone')">{{ errors.first('phone') }}</span>
                            </div>
                            <div class="verificode">
                                <input type="tel" placeholder="请输入短信验证码" name="code" v-model="code" v-validate="'required|code'">
                                <span style="color: red;" v-show="errors.has('code')">{{ errors.first('code') }}</span>
                                <button>获取验证码</button>
                            </div>
                            <div class="question">
                                <a href="https://aq.reg.163.com/ydaq/offline">遇到问题？</a>
                                <span>使用密码验证登录</span>
                            </div>
                            <div class="loginBox">
                                <button @click="login" class="login">登录</button>
                            </div>
                            <div class="agree">
                                <input class="agreeSelect" type="checkbox">
                                <span> 我同意 <a href="">《服务条款》</a> 和 <a href="">《网易隐私政策》</a> </span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="otherWay" @click="$router.replace('/personal/mailLogin')">
                <span>其他方式登录</span>
                <i class="iconfont iconxuanxiangqiayoujiantou"></i>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    data(){
        return{
            phone:'',
            code:'',
        }
    },
    methods:{
        async login(){
            // 1. 前端验证
            const success = await this.$validator.validateAll() // 对所有表单项进行验证
            if(success){ // 前端验证成功
                // 2. 后端验证逻辑.....................          
                alert('登录成功')
                this.$router.replace('/home')
            }else {// 前端验证失败
                alert('前端验证失败')
            }
        }
    }
  }
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>
@import '../../common/stylus/mixins.styl'
#phoneLoginWrap
    width 375px
    height 595px
    padding-top 28px
    .phoneview
        width 375px
        .logowrap
            width 375px
            height 45px
            text-align center
            .logo
                width 134px
                height 45px
        .userBox
            width 375px
            height 258px
            margin-top 20px
            .uesrBoxContent
                width 335px
                height 248px
                padding 11px 20px 0
                .phoneLogin
                    width 335px
                    height 248px
                    .phonenumber
                        width 335px
                        height 45px
                        bottom-border-1px(#ddd)
                        position relative
                        input 
                            margin 18px 0
                            font-size 14px
                            border none
                            outline none
                        span 
                            position absolute
                            left 0
                            bottom -12px
                    .verificode
                        width 335px
                        height 45px
                        bottom-border-1px(#ddd)
                        margin-top 15px
                        input 
                            margin 18px 0
                            font-size 14px
                            border none
                            outline none
                        span 
                            position absolute
                            left 0
                            bottom -12px
                        button 
                            color #333
                            font-size 14px
                            background #fff
                            border 1px solid #7f7f7f
                            width 86px
                            height 28px
                            border-radius 4px
                            margin-left 65px
                    .question
                        font-size 14px
                        width 335px
                        height 22px
                        margin-top 25px
                        display flex
                        justify-content space-between
                        a
                            color #7f7f7f
                        span 
                            color #333
                    .loginBox
                        width 335px
                        height 45px
                        margin-top 15px
                        .login
                            width 335px
                            height 45px
                            color #ffffff
                            font-size 14px
                            text-align center
                            line-height 45px
                            background #dd1a21
                            border-radius 4px
                            border none 
                            outline none 
                    .agree
                        margin-top 10px
                        display flex
                        align-items center
                        .agreeSelect
                            width 18px
                            height 18px
                            background #fff
                            border 1px solid red
                            border-radius 0
                            margin-right 5px
                        span
                            font-size 12px
                            a
                                color #007AFF

        .otherWay   
            font-size 14px
            color #333  
            text-align center 
            margin-top 23px
            .iconfont
                margin-left 2px
                font-size 14px
                color #888                 


                            
</style>    
