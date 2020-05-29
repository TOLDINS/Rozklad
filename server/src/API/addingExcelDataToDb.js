const Shedule=require('../Models/Schedule');

const addExcelDataToDb=async(data)=>{

    data.forEach(element=>{

        let lesson_obj=new Shedule(element);
        await lesson_obj.save();

    })




}

module.exports={
    addExcelDataToDb
}