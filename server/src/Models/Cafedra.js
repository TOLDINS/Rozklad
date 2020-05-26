const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const CafedraSchema=new Schema({
    name:String,
    classrooms:{
        type:Array,
        of:String
    }


})
module.exports=mongoose.model('cafedra',CafedraSchema);