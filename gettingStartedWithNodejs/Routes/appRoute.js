const express=require('express');
const {homeController,aboutController,contactController}=require('../Controllers/appController');

const router=express.Router();

router.get('/',homeController)
router.get('/about',aboutController)
router.get('/contact',contactController)

module.exports={router};
