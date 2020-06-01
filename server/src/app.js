const mongoose = require("mongoose");
const authentication = require("./API/authentication");
const app = require("express")();
const authRoutes = require("./Routes/authentication");
const schoolPartRoutes = require("./Routes/schoolPart");
const classroomRoutes = require("./Routes/classroom");
const { db_connect } = require("./settings.json");

authentication(app, mongoose);

app.use("/", [authRoutes, schoolPartRoutes, classroomRoutes]);

mongoose
  .connect(
    db_connect,
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    },
    (err) => {
      if (err) console.log(err);
    }
  )
  .then(() => {
    console.log("Db connected!");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = app;
