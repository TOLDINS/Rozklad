const passport = require("passport");
const router = require("express").Router();
const controller = require("../Controllers/schoolPart");
const multer = require("multer");
const bodyParser = require("body-parser");

const urlencodedParser = bodyParser.urlencoded({ extended: false });
const upload1 = multer({ dest: path.join(__dirname, "../..", "uploads/images/temp") });
const file = upload1.single("excel_file");


const authenticate = passport.authenticate(["local"], {
  session: true,
});

const mustAuthenticated = (req, res, next) => {
  if (!req.isAuthenticated()) {
    return res.status(401).redirect("/auth/signin");
  }
  next();
};

router.get("/sp/schedule/:date", controller.getScheduleByDate);
router.post("sp/upload-excel", urlencodedParser, file,  controller.postUploadExcel);

module.exports = router;
