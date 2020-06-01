const path = require('path')
const Schedule = require('../Models/Schedule')

const getScheduleByDate = async (req, res) => {
  const {date} = req.params;
  const schedule = Schedule.find({date});
  return res.status(200).send(JSON.stringify(schedule))
};
const postUploadExcel = async (req, res) => {
  const file = await req.file;
    if (file) {
    }
};

module.exports = {
  getScheduleByDate,
  postUploadExcel
}
