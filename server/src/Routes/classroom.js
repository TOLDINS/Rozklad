const passport = require("passport");
const router = require("express").Router();
const controller = require("../Controllers/classroom");

const authenticate = passport.authenticate(["local"], {
  session: true,
});

const mustAuthenticated = (req, res, next) => {
  if (!req.isAuthenticated()) {
    return res.status(401).redirect("/auth/signin");
  }
  next();
};

router.get("classroom/:cafedra", controller.getClassroomsList);
router.route("classroom/:cafedra/add").get(controller.getAddClassroom).post(controller.postAddClassroom);
router.route("classroom/:cafedra/edit/:title").get(controller.getEditClassroom).post(controller.postEditClassroom);
router.get("classroom/:cafedra/confirm-del/:title", controller.getConfirmDeleteClassroom);
router.post("classroom/:cafedra/delete/:title", controller.postDeleteClassroom);

module.exports = router;
