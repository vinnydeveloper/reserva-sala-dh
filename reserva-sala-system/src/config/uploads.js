const multer = require('multer');
const path =  require('path');

const storage = multer.diskStorage({
    destination: path.resolve(__dirname, '..','public','uploads'),
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
const upload = multer({storage});

module.exports = upload;