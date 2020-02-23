let Koa = require('koa')
let KoaRouter = require('koa-router');


const app = new Koa();
const router = new KoaRouter();


let demoData = require('./datas/demo');


router.get('/demo', (ctx, next) => {
  ctx.body = demoData
});

let cateNav = require('./datas/cateNavDatas.json');
router.get('/getCateNav', (ctx, next) => {
  ctx.body = cateNav
});

let cateList = require('./datas/cateLists.json');
router.get('/getCateList', (ctx, next) => {
  ctx.body = cateList
});

let buyNavList = require('./datas/buyNavList.json');
router.get('/getBuyNavList', (ctx, next) => {
  ctx.body = buyNavList.data.navList
});




app
  .use(router.routes())
  .use(router.allowedMethods())

app.listen('3001', () => {
  console.log('服务器地址: http://localhost:3001');
})
