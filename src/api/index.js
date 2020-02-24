import ajax from './ajax'


export const getCateNavList = () => ajax({
  url: '/getCateNavList'
})


export const getCateList = () => ajax({
  url: '/getCateList'
})

// url: https://m.you.163.com/topic/v1/know/navWap.json
export const getBuyNavList = () => ajax({
  url: '/getBuyNavList'
})

/*  发送短信验证码 */
// https://dl.reg.163.com/dl/yd/nlregssms
// export const sendCode = ({phone}) => ajax({
//   url:'https://dl.reg.163.com/dl/yd/nlregssms',
//   params:{
//       phone
//   }
// })
