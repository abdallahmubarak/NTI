const multer = require("multer")
const path = require("path")
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, "static/images")
    },
    filename:function(req, file, cb){
        const newName = Date.now()+path.extname(file.originalname)
        cb(null, newName)
    }
})
const upload = multer({
    storage,
    limits:{ fileSize: 1000000000 },
    fileFilter: function(req, file, cb){
        if(path.extname(file.originalname)!=".jpg"&&".png")
            return cb(new Error("invalid extension"), false)
        cb(false, true)
    }
})
module.exports = upload