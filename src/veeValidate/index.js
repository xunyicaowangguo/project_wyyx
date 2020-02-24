import Vue from 'vue'
import VeeValidate from 'vee-validate'
import zh_CN from 'vee-validate/dist/locale/zh_CN'

Vue.use(VeeValidate)

VeeValidate.Validator.localize('zh_CN', {
    messages: zh_CN.messages,
    attributes: {
        phone: '手机号',
        code: '验证码',
        myemail:'邮箱账号',
        password:'密码',
        // captcha:'验证码'

    }
})

//电话号码验证
VeeValidate.Validator.extend('phone', {
    validate: value => {
        return /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/.test(value)
    },
    getMessage: field => field + '不正确'
})

//短信验证码验证
VeeValidate.Validator.extend('code', {
    validate: value => {
        return /^\d{6}$/.test(value)
    },
    getMessage: field => field + '必须是6位数字'
})

//邮箱账号
VeeValidate.Validator.extend('password', {
    validate: value => {
        return /^\w+$/.test(value)
    },
    getMessage: field => field + '不正确'
})
