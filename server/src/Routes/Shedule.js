const router=require('express').Router();
const controller=require('../Controllers/shedule');
router.get('/shedule/:caf?/:day?',controller.getSheduleForDay);
router.route().
            get('/shedule/:caf?/:day?/edit',controller.getDataForEditShedule).
            post('/shedule/:caf?/:day?/edit',controller.setDataForEditShedule);

module.exports=router;