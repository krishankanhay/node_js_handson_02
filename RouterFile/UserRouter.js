const route = require("express").Router()

route.get("/register", (request,response) => {
    response.send("user Registered sussessfully")
})

route.get("/login",(request,response) => {
    response.send("user login sussessfully")
})

module.exports = route;
