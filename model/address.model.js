const { Schema, model } = require("mongoose");

let addressSchema = new Schema(
  {
    adminId: {
      type: Schema.Types.ObjectId,
    },
    country: {
      type: String,
      required: [true, "country is required"],
    },
    state: {
      type: String,
      required: [true, "state is required"],
    },
    city: {
      type: String,
      required: [true, "city is required"],
    },
    pincode: {
      type: String,
      required: [true, "pincode is necessary for deliver the prodcut"],
    },
    addressDescrption1: {
      type: String,
      required: [true, "atleast have something"],
      min: 1,
    },
    addressDescrption2: {
      type: String,
      min: [1, "atleast have something"],
    },
    name: {
      type: String,
    },
    mobile: {
      type: Number
    },
  },
  { timestamps: true }
);

module.exports = model("address", addressSchema);
