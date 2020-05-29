const mongoose = requeire("mongoose");
const authentication = require("./API/authentication");
const app = require("express")();
const authRoutes = require("./Routes/authentication");
const schoolPartRoutes = require("./Routes/schoolPart");
const classroomRoutes = require("./Routes/classroom");

authentication(app, mongoose);

app.use("/", [authRoutes, schoolPartRoutes, classroomRoutes]);

module.exports = app;
