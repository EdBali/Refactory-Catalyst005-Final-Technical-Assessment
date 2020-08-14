const express = require('express');
const router = express.Router();

const Form =require('../models/formModel')

router.post('/add', async (req,res)=>{
    
        

    const product =  new Form(
        req.body
    );
    try{
     await product.save();
     console.log(product)
    res.render('form')
    }catch(err){
        res.send('Error while adding: ' + err)
        console.log('Error while adding: ' + err)
    }
})
router.get('/', (req,res) =>{
    res.render('form');
})

module.exports = router;