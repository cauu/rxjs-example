const Koa = require('koa')
const Router = require('koa-router')
const delay = require('delay')
const cors = require('@koa/cors')

const port = 8080

const app = new Koa()
var router = new Router();

router.get('/ping', async (ctx, next) => {
    const { request: { query } } = ctx
    const { input, delayTime=0 } = query

    await delay(delayTime)

    ctx.body = input
})

app
  .use(cors())
  .use(router.routes())
  .use(router.allowedMethods())

console.log('正在启动http服务...')
app.listen(port)
console.log('启动成功...')
console.log(`正在监听${port}端口...`)
