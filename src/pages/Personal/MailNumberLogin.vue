<template>
  <div id="mailLoginWrap">
    <div class="mailview">
        <div class="logowrap">
            <img class="logo" src="//yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png">
        </div>
        <div class="userBox">
            <div class="userBoxContent">
                <div class="mailNumber">
                    <input type="text" placeholder="邮箱账号" v-model="email" name="myemail" v-validate="'required|email'">
                    <span style="color: red;" v-show="errors.has('myemail')">{{ errors.first('myemail') }}</span>
                </div>
                <div class="pwd">
                    <input type="password" placeholder="密码" v-model="password" name="password" v-validate="'required|password'">
                    <span style="color: red;" v-show="errors.has('password')">{{ errors.first('password') }}</span>
                </div>
                <div class="question">
                    <a href="https://zc.reg.163.com/m/regInitialized?pd=yanxuan&pkid=QyOtTGv&pkht=you.163.com&tp=2&as=3&curl=http%3A%2F%2Fm.you.163.com%2Fucenter">注册账号</a>
                    <a href="https://reg.163.com/resetpwd/index.do">忘记密码</a>
                </div>
                <div class="loginBox">
                    <button class="login" @click="login">登录</button>
                </div>
            </div>
        </div>
        <div class="otherWay" @click="$router.replace('/personal/phoneLogin')">
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
        email:'',
        password:'',
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
#mailLoginWrap
    width 375px
    height 595px
    padding-top 28px
    .mailview
        width 375px
        .logowrap
            width 375px
            height 45px
            text-align center
            .logo
                width 134px
                height 45px
        .userBox
            margin 20px 20px 0
            width 335px
            height 289px
            .userBoxContent
                width 335px
                padding-top 57px
                .mailNumber
                    width 335px
                    height 45px
                    bottom-border-1px(#ddd)
                    input 
                        margin 20px 0
                        font-size 14px
                        border none 
                        outline none
                .pwd
                    width 335px
                    height 45px
                    bottom-border-1px(#ddd)
                    input 
                        margin 20px 0
                        font-size 14px
                        border none 
                        outline none
                .question
                    width 335px
                    height 20px
                    font-size 14px
                    display flex
                    justify-content space-between
                    margin-top 20px
                    font-size 14px
                .loginBox
                    width 335px
                    height 45px
                    margin-top 20px
                    .login
                        width 335px
                        height 45px
                        color #ffffff
                        background #dd1a21
                        text-align center
                        line-height 45px
                        font-size 14px
                        border-radius 4px
                        border none 
                        outline none


        .otherWay   
            font-size 14px
            color #333  
            text-align center 
            .iconfont
                margin-left 2px
                font-size 14px
                color #888    
</style>
