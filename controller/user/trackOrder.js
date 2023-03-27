const trackService = require("../../service/user/trackOrder")
let {response} = require("../../middleware/responseMiddleware")

exports.getOrderByTrackId = async (req, res) => {
    try {
      let resp = await trackService.getOrderByTrackId(req.query?.str);
      if (resp) return response("SUCCESS..!!", resp.data, 200, res);
      else return response("Error..!!", {}, 500, res);
    } catch (err) {
      return response(err.message, err?.error, err.status, res);
    }
  };