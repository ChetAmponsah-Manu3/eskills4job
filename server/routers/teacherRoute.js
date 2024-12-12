const express = require('express');
const router = express.Router();
router.route('/')
    .get((req, res)=>{
        res.send('All teacher')
    })
    .post((req, res)=>{
        res.send('teacher created')
    })
    
router.route('/:id')
    .get((req, res)=>{
        res.send('Specified teacher by Id')
    })
    .patch((req, res)=>{
        res.send('teacher Updated')
    })
    .delete((req, res)=>{
        res.send('teacher Deleted')
    })

module.exports = router;