const passport = require("passport");
const router = require("express").Router();
const controller = require("../Controllers/authentication");

const authenticate = passport.authenticate(["local"], {
  session: true,
});

const mustAuthenticated = (req, res, next) => {
  if (!req.isAuthenticated()) {
    return res.status(401).redirect('/auth/signin');
  }
  next();
};

router.post("/signin",/*authenticate,*/ controller.postSignIn);
router.post("/signup",controller.postSignUp);
router.post("/logout", mustAuthenticated, controller.postLogout);

module.exports = router;
