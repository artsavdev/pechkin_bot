const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()

const timer = require('./timer')

module.exports = () => {
  timer.start()
  
  router.get('/', async ctx => {
    timer.reschedule()
    ctx.body = 'reschedule'
  })

  app.use(router.routes())
  app.use(router.allowedMethods())

  return app
}


