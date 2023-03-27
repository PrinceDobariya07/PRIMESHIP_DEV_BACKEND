// const path = require("path");
const path = require("path");
const request = require("request");
// request("dotenv").config({ path: path.join(__dirname, "../../config/.env") });
require("dotenv").config({ path: path.join(__dirname, "../../config/.env") });

const axios = require("axios").default;

module.exports = {
  sendOtpOnSMS: (mobile, otp) => {
    // console.log("mobile....", mobile);
    // console.log("otp....", otp);

    return new Promise(async (res, rej) => {
      try {
        console.log("API KEy: ", process.env.SMS_API_KEY)
        let success = await axios.post(
          "https://www.fast2sms.com/dev/bulkV2",
          {
            message: `PRIMESHIP \nYour otp is: ${otp}. Do not share with others.`,
            route: "otp",
            variables_values:otp,
            language: "english",
            sender_id: "FTWSMS",
            numbers: mobile,
            flash: "0",
          },
          {
            headers: {
              authorization: process.env.SMS_API_KEY,
            },
          }
        );
        res(success);
        console.log("otp sent succcessfull;y");
      } catch (err) {
        console.log("sms.. module", err);
        rej({ status: 500, error: err });
      }
    });
  },
};
