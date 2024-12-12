const express = require('express');
const router = express.Router();
router.route('/')
    .get((req, res)=>{
        res.send('All finance')
    })
    .post((req, res)=>{
        res.send('finance created')
    })
    
router.route('/:id')
    .get((req, res)=>{
        res.send('Specified finance by Id')
    })
    .patch((req, res)=>{
        res.send('finance Updated')
    })
    .delete((req, res)=>{
        res.send('finance Deleted')
    })

module.exports = router;