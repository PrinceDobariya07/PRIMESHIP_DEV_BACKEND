const { Router } = require("express");
const userRoute = Router();

const authRoute = require("./auth");
const profileRoute = require("./profile");
const imageRoute = require("./image");
const aboutUsRoute = require("./about_us");
const orderRoute = require("./order");
const subscribeRoute = require("./subscriber");
const userDataRoute = require("./userdata");
const inquiryRoute = require("./inquiry");
const dashBoardRoute = require("./dashboard");
const refundRoute = require("./refund");
const commonController = require("../../controller/common");
const getLogoRoute = require("./getLogo");

const { verifyUserToken } = require("../../middleware/verifytoken");
const trackRoute = require("./trackRoute");

userRoute.get("/", (req, res) => {
  res.status(200).json({ message: "user route is working" });
});

userRoute.use("/auth", authRoute);
userRoute.use("/profile", profileRoute);
userRoute.use("/image", imageRoute);
userRoute.use("/aboutus", aboutUsRoute);
userRoute.use("/order", verifyUserToken, orderRoute);
userRoute.use("/subscribe", subscribeRoute);
userRoute.use("/userData", verifyUserToken, userDataRoute);

userRoute.use("/inquiry", inquiryRoute);
userRoute.use("/DashBoard", verifyUserToken, dashBoardRoute);
userRoute.use("/refund", verifyUserToken, refundRoute);
userRoute.get("/getLogo", getLogoRoute);
userRoute.use("/track",trackRoute)


module.exports = userRoute;
