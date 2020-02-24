import Vue from 'vue'
import VeeValidate from 'vee-validate'
import zh_CN from 'vee-validate/dist/locale/zh_CN'

Vue.use(VeeValidate)

VeeValidate.Validator.localize('zh_CN', {
    messages: zh_CN.messages,
    attributes: {
        phone: '手机号',
        code: '验证码',
        mail:'邮箱账号',
        pwd:'密码',
        // captcha:'验证码'

    }
})

//电话号码验证
VeeValidate.Validator.extend('phone', {
    validate: value => {
        return /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/.test(value)
    },
    getMessage: field => field + '手机号码不正确'
})

//短信验证码验证
VeeValidate.Validator.extend('code', {
    validate: value => {
        return /^\d{4,6}$/.test(value)
    },
    getMessage: field => field + '必须是4~6位数字'
})

//邮箱账号
VeeValidate.Validator.extend('mailname', {
    validate: value => {
        return /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(value)
    },
    getMessage: field => field + '邮箱账号不正确'
})
