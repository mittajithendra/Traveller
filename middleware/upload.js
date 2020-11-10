const util = require("util");
const multer = require("multer");
const GridFsStorage = require("multer-gridfs-storage");

const storage = multer.diskStorage({
  destination:function(req,file,cb){
    cb(null,'public/images');
  },
  filename: function(req,file,cb){
    cb(null,`${Date.now()}-jithu-${file.originalname}`);
  }
});




/*
var storage = new GridFsStorage({
  url: "http://localhost:3000/storingImages/",
  options: { useNewUrlParser: true, useUnifiedTopology: true },
  file: (req, file) => {
    const match = ["image/png", "image/jpeg"];

    if (match.indexOf(file.mimetype) === -1) {
      const filename = `${Date.now()}-jithu-${file.originalname}`;
      return filename;
    }

    return {
      bucketName: "photos",
      filename: `${Date.now()}-jithu-${file.originalname}`
    };
  }
});
*/
var uploadFiles = multer({ storage: storage }).array("multi-files", 100);
// var uploadFiles = multer({ storage: storage }).single("file");
var uploadFilesMiddleware = util.promisify(uploadFiles);
module.exports = uploadFilesMiddleware;
