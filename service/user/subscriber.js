const subscribeSchema = require("../../model/subscribe.model")
const mongoose = require("mongoose")

module.exports = {
    add: (data) => {
        return new Promise(async (res, rej) => {
            try {
                let newSubscribeSchema = new subscribeSchema(data);
                let addData = await newSubscribeSchema.save();
                if (addData)
                    res({ status: 200, data: addData });
                else
                    rej({ status: 500, message: "something went wrong!!" });
            }
            catch (err) {
                rej({ status: 500, error: err, message: "something went wrong!!" });
            }
        });
    },

}
