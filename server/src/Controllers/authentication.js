const User = require("../Models/User");

const viewTypes = {
  signIn: "signIn",
  signUp: "signUp",
};



module.exports.postSignIn = async (req, res) => {
   //res.set("Access-Control-Allow-Origin", "*");
  console.log(req)
  return res.send(JSON.stringify({resp:"hello"}));
};



module.exports.postSignUp = async (req, res) => {
  const { name,user_type, group, email, password, password2 } = req.body;
  const data = { name, user_type, group, email };

  const user = await User.findOne({ "local.email": email });

  if (user) {
    res.status(200).render(view, {
      title: "Реєстрація",
      type: viewTypes.signUp,
      ...data,
      message: "Такий e-mail уже зареєстровано",
    });
  } else if (password !== password2) {
    res.status(200).render(view, {
      title: "Реєстрація",
      type: viewTypes.signUp,
      ...data,
      message: "Паролі не співпадають",
    });
  } else {
    const userData = {
      name,
      user_type,
      group,
      local: { email, password },
    };
    await new User(userData).save();
    res.status(200).redirect("./signin");
  }
};

module.exports.postLogout = async (req, res) => {
  req.logout();
  res.redirect("/auth/signin");
};
