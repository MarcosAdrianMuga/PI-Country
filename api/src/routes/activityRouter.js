const { Router } = require("express")
const activityRouter = Router()
const { getAllActivityHandler, createActivityHandler } = require("../handlers/activityHandler")

activityRouter.post("/", createActivityHandler)
activityRouter.get("/", getAllActivityHandler)

module.exports = activityRouter;