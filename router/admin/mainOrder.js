const { Router } = require("express");
const mainOrderRouter = Router();
const mainOrdercontroller = require("../../controller/admin/mainOrder");

mainOrderRouter.post("/:_id", mainOrdercontroller.add);
mainOrderRouter.get("/mainOrderList", mainOrdercontroller.get);
mainOrderRouter.get("/orderList", mainOrdercontroller.orderList);
mainOrderRouter.put("/deleteOrder/:_id", mainOrdercontroller.deleteSubOrderId);
mainOrderRouter.get("/mainOrderList/:_id", mainOrdercontroller.mainOrderList);
mainOrderRouter.put("/editOrder/:_id", mainOrdercontroller.editOrder);

module.exports = mainOrderRouter;
