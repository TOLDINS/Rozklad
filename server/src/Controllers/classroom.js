const Cafedra = require("../Models/Cafedra");

const getClassroomsList = (req, res) => {
  const { cafedra } = req.params;
  const classrooms = Cafedra.find({ name: cafedra }).select({ classrooms: 1 });
  return res.status(200).send(JSON.stringify(classrooms));
};
const getAddClassroom = (req, res) => {
  
};
const postAddClassroom = (req, res) => {
  const { cafedra } = req.params;
  const {} = req.body;

  const updated = Cafedra.findOneAndUpdate(
    { name: cafedra },
    { $push: {classrooms: 99 }}
  );

  return res.status(200).send(JSON.stringify(updated));
};
const getEditClassroom = (req, res) => {};
const postEditClassroom = (req, res) => {
  const { cafedra, title } = req.params;
  const {} = req.body;

  const classrooms = Cafedra.findOne({ name: cafedra }).select({classrooms:1});
  const edit_index = classrooms.findIndex(item => item === title)
  classrooms[edit_index] = '77';

  const updated = Cafedra.findOneAndUpdate(
    { name: cafedra },
    { classrooms }
  );

  return res.status(200).send(JSON.stringify(updated));
};
const getConfirmDeleteClassroom = (req, res) => {};
const postDeleteClassroom = (req, res) => {
  const { cafedra, title } = req.params;
  const {} = req.body;

 const classrooms = Cafedra.findOne({ name: cafedra }).select({ classrooms: 1 });
 const delete_index = classrooms.findIndex((item) => item === title);
  const deleted = Cafedra.findOneAndDelete({ name: cafedra }, { classrooms: [
    ...classrooms.slice(0, delete_index),
    ...classrooms.slice(delete_index + 1)
  ]});

  return res.status(200).send(JSON.stringify(deleted));
};

module.exports = {
  getClassroomsList,
  getAddClassroom,
  postAddClassroom,
  getEditClassroom,
  postEditClassroom,
  getConfirmDeleteClassroom,
  postDeleteClassroom,
};
