const express = require('express')
const next = require('next')

const opsConfig = require('./configs/config.ops')
const devConfig = require('./configs/config.dev')

const port = process.env.PORT || opsConfig.DEFUALT_PORT || 3001
const isProd = process.env.NODE_ENV === 'production'

const app = next({ dev: !isProd })
const handle = app.getRequestHandler()

// nextjs服务端对象准备就绪
app.prepare().then(() => {
  const server = express()

  // 构造语言环境路由匹配的正则
  const langRegExp = new RegExp(
    `^\/(${devConfig.languages.join(')|(')})`,
    'i'
  )

  console.log('languages regexp:', langRegExp)

  // 路由拦截获取默认语言
  server.get(langRegExp, (req, res) => {
    let url = null
    let lang = null
    const pathMatchResult = req.path.match(langRegExp)
    if (pathMatchResult && pathMatchResult[0]) {
      url = req.path.replace(pathMatchResult[0], '')
      lang = pathMatchResult[0].replace('/', '')
    }

    if (!url) {
      url = '/'
    }

    if (!lang) {
      lang = devConfig.defaultLanguage
    }

    console.log('lang::::::::', lang)

    return app.render(req, res, url, { lang })
  })

  // 强制重定向设置语言环境
  server.get('/', (req, res) => {
    res.redirect(`/${devConfig.defaultLanguage}/`)
  })

  // 其他路由
  server.get('*', (req, res) => handle(req, res))

  server.listen(port, error => {
    if (error) {
      throw error
    }

    console.log(`Ready on http://localhost:${port}`)
  })
})
