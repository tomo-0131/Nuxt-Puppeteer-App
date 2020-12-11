const express = require('express');
const app = express();
const scraping = require('./scraping')

app.get('/scraping', async(req, res) => {
  const data = await scraping.brand()
  res.json(data)
})

module.exports = {
  path:'/api',
  handler: app
}
