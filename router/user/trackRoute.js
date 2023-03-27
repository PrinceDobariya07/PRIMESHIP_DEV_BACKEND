const { Router } = require("express")
const trackRoute = Router()
const trackController = require("../../controller/user/trackOrder")


trackRoute.get("/", trackController.getOrderByTrackId)

module.exports = trackRoute