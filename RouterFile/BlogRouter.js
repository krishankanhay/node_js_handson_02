const { JSON_DATA } = require("../blogdata")

const route = require("express").Router()

route.post("/createBlog", (request, response) => {
    return response.send("blog created")
})

route.get("/getdata", (request, response) => {
    return response.send(JSON_DATA)
})

route.get("/getsingleBlogData/:ids", (request,response) => {
    const ids = request.params.ids;
    const singleData = JSON_DATA.find(item => item.id == ids)
    return response.send(singleData)
})

module.exports = route;