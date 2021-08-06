import express from 'express'
import mongoose from 'mongoose'
import { dbURI, port } from './config/environment.js'
import router from './config/router.js'
import path from 'path'

const app = express()
const __dirname = path.resolve()
const startServer = async () => {
  try {
    app.use(express.static(`${__dirname}/client/build`))
    // connecting dbURI
    await mongoose.connect(dbURI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
    console.log('🌟 Database has connected successfully')

    // log request
    app.use((req, _res, next) => {
      console.log(`🐶🐱 Incoming request: METHOD: ${req.method}, URL: ${req.url}`)
      next()
    })

    // convert into json
    app.use(express.json())

    // add router
    app.use('/api', router)

    app.use('/*', (_, res) => res.sendFile(`${__dirname}/client/build/index.html`))

    // event listener
    app.listen(port, () => console.log(`🐶🐱 Express is up and running on ${port}`))

  } catch (err) {
    console.log(err)
    console.log('S.O.S 💀')
  }
}

startServer()


