const controller = require("./controller");


module.exports = [{
    method: "POST",
    path: "/uploadImages",
    config: {
        payload: {
            output: "stream",
            parse: true,
            allow: "multipart/form-data",
            multipart: true,
            maxBytes: 200 * 1000 * 1000
        }
    },
    handler: controller.uploadImages
}];