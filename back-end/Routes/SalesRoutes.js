const express = require('express')
const controller = require("../Controllers/SalesControllers.js")
const routes = express.Router()


routes.get("/getAll", controller.getAll)
routes.get("/getOne/:id", controller.getOne)
routes.post("/Add", controller.Add)
routes.put("/Update/:id", controller.Update)
routes.delete("/DELETE/:id", controller.DELETE)

module.exports = routes;