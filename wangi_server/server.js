let Koa = require('koa')
let KoaRouter = require('koa-router');


const app = new Koa();
const router = new KoaRouter();


let demoData = require('./datas/demo');


router.get('/demo', (ctx, next) => {
  ctx.body = demoData
});

// 1. http://m.you.163.com/item/list?categoryId=1005000 ${indexCateList.id}
// let indexCateList = require('./datas/indexCateModule.json')
// router.get(`/item/list?categoryId=1005000`, (ctx, next) => {
//   ctx.body = indexCateList
// });



app
  .use(router.routes())
  .use(router.allowedMethods())

app.listen('3001', () => {
  console.log('服务器地址: http://localhost:3001');
})
