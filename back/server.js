const express = require('express')
const cors = require('cors')
const app = express()
const PORT = process.env.Port || 2224
const imagesRouter = require('./imagesRouter')


app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

app.use('/images',imagesRouter)

app.listen(PORT, () => {
  console.log(`Server in ${PORT} port`)
})
