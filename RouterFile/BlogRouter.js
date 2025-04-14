const { JSON_DATA } = require("../ServerData")

const route = require("express").Router()

route.post("/createBlog", (request, response) => {
    response.send("blog created")
})

route.get("/getdata", (request, response) => {
    response.send(JSON_DATA)
})

module.exports = route;