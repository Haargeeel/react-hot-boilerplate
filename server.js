const path = require('path')
const webpack = require('webpack')
const express = require('express')
const config = process.env.NODE_ENV === 'development'
  ? require('./config/development')
  : require('./config/production')

const app = express()

if (process.env.NODE_ENV === 'development') {
  const compiler = webpack(config.webpackConfig)
  app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: config.webpackConfig.output.publicPath,
    noInfo: true
  }))

  app.use(require('webpack-hot-middleware')(compiler))

  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'index-dev.html'))
  })
}

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(config.port, function(err) {
  if (err) return console.error(err)

  console.log(`Listening at http://localhost:${config.port}/`)
})
