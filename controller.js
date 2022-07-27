const fs = require("fs");
module.exports = {
    uploadImages: async (req, h) => {
    
        var result = [];
        for(var i = 0; i < req.payload["images"].length; i++) {
            result.push(req.payload["images"][i].hapi);
            req.payload["images"][i].pipe(fs.createWriteStream(__dirname + "/uploads/here/" + req.payload["images"][i].hapi.filename))
        }
        console.log('hey'+__dirname)
        return h.response(result);
    },
};