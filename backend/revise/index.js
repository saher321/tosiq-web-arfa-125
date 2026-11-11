import express from 'express'
import { connectDB } from './config/db.js'
import userRouter from './modules/users/user.routes.js'

const app = express()
const port = 3000

// http://localhost:3000/users
app.use("", userRouter)


app.get("/", (req, res) => {
    return res.send({
        status: true,
        message: "Server is running..."
    })
})

connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Server is started at http://localhost:${port}`)
    })
})