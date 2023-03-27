let service = require("../../service/admin/mainOrder")
let { response } = require("../../middleware/responseMiddleware")

exports.add = async (req, res) => {
    try {
        let resp = await service.add(req.params._id, req.body.subOrderId);
        if (resp)
            return response("Data saved successfully..!!", {}, 200, res)
        else
            return response("Error..!!", err.error, err.status, res)
    }
    catch (err) {
        return response(err.message, err?.error, err.status, res)
    }
}

exports.get = async (req, res) => {
    try {
        let resp = await service.get()
        if (resp)
            return response("SUCCESS..!!", resp.data, 200, res)
        else
            return response("Error..!!", err.error, err.status, res)
    }
    catch (err) {
        return response(err.message, err?.error, err.status, res)
    }
}

exports.orderList = async (req, res) => {
    try {
        let resp = await service.orderList()
        if (resp)
            return response("SUCCESS..!!", resp.data, 200, res)
        else
            return response("Error..!!", err.error, err.status, res)
    }
    catch (err) {
        return response(err.message, err?.error, err.status, res)
    }
}

exports.deleteSubOrderId = async (req, res) => {
    try {
        let resp = await service.deleteSubOrderId(req.params._id, req.body.subOrderId)
        if (resp)
            return response("SUCCESS..!!", resp.data, 200, res)
        else
            return response("Error..!!", err.error, err.status, res)
    }
    catch (err) {
        return response(err.message, err?.error, err.status, res)
    }
}

exports.mainOrderList = async (req, res) => {
    try {
        let resp = await service.mainOrderList(req.params._id)
        if (resp)
            return response("SUCCESS..!!", resp.data, 200, res)
        else
            return response("Error..!!", err.error, err.status, res)
    }
    catch (err) {
        return response(err.message, err?.error, err.status, res)
    }
}

exports.editOrder = async (req, res) => {
    try {
      let resp = await service.editOrder(req.params._id, req.body);
      if (resp) return response("SUCCESS..!!", resp.data, 200, res);
      else return response("Error..!!", {}, 500, res);
    } catch (err) {
      return response(err.message, err?.error, err.status, res);
    }
  };
