const router=require('express')();
const controller=require('../Controllers/cadet');


router.get(':id_cadet/:group/shedule',controller.getSheduleForCadet);



module.exports.router;





