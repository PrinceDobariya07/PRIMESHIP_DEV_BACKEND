const userModel = require("../../model/user.model");
const addressModel = require("../../model/address.model");
const mongoose = require("mongoose");

module.exports = {
  add: (data) => {
    return new Promise(async (res, rej) => {
      try {
        console.log("data ...........", data);
        let newData = new addressModel(data);
        let addData = await newData.save();
        // let addData = await userModel.findByIdAndUpdate(_id, { $addToSet: { address: data } }, { new: true });
        if (addData) res({ status: 200, data: "Address Added!!" });
        else rej({ status: 500, message: "something went wrong!!" });
      } catch (err) {
        console.log(err);
        rej({ status: 500, error: err, message: "something went wrong!!" });
      }
    });
  },

  get: (adminId) => {
    return new Promise(async (res, rej) => {
      try {
        let getData = await addressModel.find({ adminId: mongoose.Types.ObjectId(adminId) });
        console.log("getData ............", getData);
        if (getData) res({ status: 200, data: getData });
        else rej({ status: 500, message: "something went wrong!!111" });
      } catch (err) {
        console.log(err);
        rej({ status: 500, error: err, message: "something went wrong!!222" });
      }
    });
  },

  update: (adminId, addressId, updatedAddress) => {
    return new Promise(async (res, rej) => {
      try {
        console.log("adminId ..........", adminId);
        console.log("addressId ..........", addressId);
        console.log("updatedAddress ..........", updatedAddress);
        let updateData = await addressModel.findOneAndUpdate(
          { _id: addressId, adminId: adminId },
          updatedAddress,
          { upsert: true }
        );
        if (updateData) res({ status: 200, data: "Address Updated!!" });
        else rej({ status: 500, message: "something went wrong!!111" });
      } catch (err) {
        console.log(err);
        rej({ status: 500, error: err, message: "something went wrong!!222" });
      }
    });
  },

  delete: (_id, addressId) => {
    return new Promise(async (res, rej) => {
      try {
        let deleteData = await addressModel.findByIdAndDelete(
          { _id: addressId }
        );
        if (deleteData) res({ status: 200, data: "Address Deleted!!" });
        else
          rej({
            status: 404,
            message: "something went wrong!!111",
          });
      } catch (err) {
        console.log(err);
        rej({ status: 500, error: err, message: "something went wrong!!222" });
      }
    });
  },

};
