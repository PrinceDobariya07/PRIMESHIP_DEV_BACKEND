const mongoose = require("mongoose");
const orderModel = require("../../model/order.model");

module.exports= {
getOrderByTrackId: (str) => {
    return new Promise(async (res, rej) => {
      try {
        let qry = {};
        if (str) {
            qry["trackingNo"] = { $regex: str, $options: "i" };
        }
       
          const orderData = await orderModel.find(qry,{
            __v:0
          })
        if (orderData.length > 0) res({ status: 200, data: orderData });
        else rej({ status: 404, error: {}, message: "No data found!!" });
      } catch (err) {
        console.log("err..", err);
        rej({ status: 500, error: err, message: "something went wrong!!" });
      }
    });
  },
}
