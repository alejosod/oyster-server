import express from "express"
import bodyParser from 'body-parser'
import session from 'express-session'
import cookieParser from 'cookie-parser'

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(session({ secret: '' }))

app.listen(8000, () => {
    console.log("server started at http://localhost:8000")
})
