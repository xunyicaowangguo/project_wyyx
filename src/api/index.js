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


//
// export const getCateList = () => ajax({
//   url: '/xxx'
// })
