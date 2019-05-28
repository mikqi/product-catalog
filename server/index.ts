import express from 'express'
import logger from 'morgan'
import next from 'next'

const port = parseInt(process.env.PORT || '3000', 10)
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.use(logger('dev'))

  server.use('/api', require('./api'))

  server.get('/', (req, res) => {
    return app.render(req, res, '/', req.query)
  })

  server.get('/products', (req, res) => {
    return app.render(req, res, '/', req.query)
  })

  server.get('/products/:id', (req, res) => {
    return app.render(req, res, '/products', { id: req.params.id })
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`> Ready on http://localhost:${port}`)
  })
})
