const route = require("express").Router()

route.get("/register", (request,response) => {
    return response.send("user Registered sussessfully")
})

route.get("/login",(request,response) => {
    return response.send("user login sussessfully")
})

module.exports = route;


