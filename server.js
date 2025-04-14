const express = require("express")
const cors = require("cors")

const userRouter = require("./RouterFile/UserRouter")
const blogRouter = require("./RouterFile/BlogRouter")

const app = express()

app.use(cors({
    // origin:["http://localhost:5000/user/login", ""]
    origin: "*"
}))

app.use("/user", userRouter)
app.use("/blog", blogRouter)


app.listen(8000, () => {
    try {
        console.log("server is running fine");
    }
    catch (err) {
        console.log(err, "error during staring the server");
        
    }
    
})




