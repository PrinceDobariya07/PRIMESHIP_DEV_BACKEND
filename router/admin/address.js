const { Router } = require("express");
const addressRoute = Router();
const addressController = require("../../controller/admin/address");

addressRoute.post("/", addressController.add);
addressRoute.get("/", addressController.get);
addressRoute.put("/:addressId", addressController.update);
addressRoute.delete("/:addressId", addressController.delete);

module.exports = addressRoute;
