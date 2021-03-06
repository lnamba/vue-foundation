const path = require('path');
const express = require('express');

module.exports = {
  app: function () {
    const app = express()
    const indexPath = path.join(__dirname, 'docs/index.html')
    const publicPath = express.static(path.join(__dirname, 'docs/static'))

    app.use('/static', publicPath)
    app.get('/', function (_, res) { res.sendFile(indexPath) })

    return app;
  }
}
