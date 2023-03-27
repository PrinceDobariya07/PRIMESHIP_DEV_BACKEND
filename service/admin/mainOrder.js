const mongoose = require("mongoose");
const mainOrderModel = require("../../model/mainOrder.model");
const orderModel = require("../../model/order.model");

module.exports = {
    add: (_id, subOrderId) => {
        return new Promise(async (res, rej) => {
            try {
                let saveData;
                let existData = await mainOrderModel.find({ mainOrderId: mongoose.Types.ObjectId(_id) });
                console.log("existData ...........", existData)
                if (existData.length > 0) {
                    console.log("niwebiu2gyhhub");
                    saveData = await mainOrderModel.findOneAndUpdate({ mainOrderId: mongoose.Types.ObjectId(_id) }, { $push: { subOrderList: subOrderId } }, { new: true });

                }
                else {
                    console.log("3478678463784");
                    let data = {
                        mainOrderId: _id,
                        subOrderList: subOrderId
                    };
                    let newData = new mainOrderModel(data);
                    saveData = await newData.save();
                }
                if (saveData) {
                    res({ status: 200, data: "Data saved successfully..!!" });
                }
                else {
                    rej({ status: 404, message: "No Admin Added!!!" });
                }
            } catch (err) {
                console.log(err);
                rej({ status: 500, error: err, message: "something went wrong!!" });
            }
        });
    },

    get: () => {
        return new Promise(async (res, rej) => {
            try {
                let getData = await orderModel.find({ isMain: true });
                getData = getData;
                if (getData) {
                    res({ status: 200, data: getData });
                } else {
                    rej({ status: 404, message: "No Admin Added!!!" });
                }
            } catch (err) {
                console.log("err..", err);
                rej({ status: 500, message: err.message, error: err.error });
            }
        });
    },

    orderList: () => {
        return new Promise(async (res, rej) => {
            try {
                let a = [];
                let getData = await orderModel.find().sort({ createdAt: -1 })
                await getData.filter(e => e.isMain !== true);
                getData.map((item) => {
                    let obj = {
                        _id: item._id,
                        userName: item.userName,
                        address: item.address,
                        trackingNo: item.trackingNo
                    };
                    a.push(obj)
                    return a
                });
                console.log(a.length)
                if (getData) {
                    res({ status: 200, data: a });
                } else {
                    rej({ status: 404, message: "No Admin Added!!!" });
                }
            } catch (err) {
                console.log("err..", err);
                rej({ status: 500, message: err.message, error: err.error });
            }
        });
    },

    deleteSubOrderId: (_id, subOrderId) => {
        return new Promise(async (res, rej) => {
            try {
                let getData = await mainOrderModel.findOneAndUpdate({ mainOrderId: mongoose.Types.ObjectId(_id) }, { $pull: { subOrderList: subOrderId } }, { new: true });
                if (getData) {
                    res({ status: 200, data: getData });
                }
                else {
                    rej({ status: 404, message: "No Admin Added!!!" });
                }
            } catch (err) {
                console.log(err);
                rej({ status: 500, error: err, message: "something went wrong!!" });
            }
        });
    },

    mainOrderList: (_id) => {
        return new Promise(async (res, rej) => {
            try {
                let getData = await mainOrderModel.aggregate([
                    {
                        $match: {
                            mainOrderId: mongoose.Types.ObjectId(_id),
                        },
                    },
                    {
                        $lookup: {
                            from: 'orders',
                            localField: 'subOrderList',
                            foreignField: '_id',
                            as: "orderData"
                        },
                    },
                    // { $unwind: "$orderData" },
                ]);
                // getData = getdata[0];
                if (getData.length > 0) {
                    res({ status: 200, data: getData });
                }
                else {
                    rej({ status: 404, message: "No Admin Added!!!" });
                }
            } catch (err) {
                console.log(err);
                rej({ status: 500, error: err, message: "something went wrong!!" });
            }
        });
    },

    editOrder: (_id, data) => {
        return new Promise(async (res, rej) => {
            try {
                if (data.amount) {
                    let editData = await orderModel.findByIdAndUpdate(_id, { amount: data.amount }, { new: true });
                    if (editData) {
                        res({ status: 200, data: "Data updated Successfully..!!" });
                    }
                    else {
                        rej({ status: 404, message: "Invalid id..!!" });
                    }
                }
                else {
                    res({ status: 404, message: "Can only update" });
                }
            }
            catch (err) {

            }
        })
    }

};
