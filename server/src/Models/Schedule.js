const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const ScheduleSchema=new Schema({
    num_kaf:String,
    name_kaf:String,
    lesson_name:String,
    teacher:{
        type:Array,
        of:String
    },
    group:String,
    class_room:{
        type:Array,
        of:String
    },
    date:Date,
    index_number:String


})
module.exports=mongoose.model('schedule',ScheduleSchema);