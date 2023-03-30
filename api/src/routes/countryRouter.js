const { Router } = require("express")
const countryRouter = Router()

const { getAllContriesHandler, getContryByIdHandler } = require("../handlers/countryHandler")


countryRouter.get("/", getAllContriesHandler)

countryRouter.get("/:id", getContryByIdHandler)

module.exports = countryRouter;
