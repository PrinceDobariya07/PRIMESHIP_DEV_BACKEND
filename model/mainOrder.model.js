const { Schema, model } = require("mongoose");

const mainOrderSchema = new Schema(
  {
    // title: { type: String },
    subOrderList: [
      {
        type: Schema.Types.ObjectId,
        ref: "orders",
      },
    ],
    mainOrderId: {
      type: Schema.Types.ObjectId,
      ref: "orders",
    },
  },
  { timestamps: true }
);

module.exports = model("mainOrder", mainOrderSchema);
