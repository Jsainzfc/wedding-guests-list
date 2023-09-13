import express from 'express'

const app = express()
const server = http.createServer(app)

server.listen(8080, () => {
  console.log('Express Server listening at http://localhost:8080')
})
