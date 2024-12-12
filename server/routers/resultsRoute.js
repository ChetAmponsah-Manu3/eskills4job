const express = require('express');
const router = express.Router();
router.route('/')
    .get((req, res)=>{
        res.send('All results')
    })
    .post((req, res)=>{
        res.send('results created')
    })
    
router.route('/:id')
    .get((req, res)=>{
        res.send('Specified results by Id')
    })
    .patch((req, res)=>{
        res.send('results Updated')
    })
    .delete((req, res)=>{
        res.send('results Deleted')
    })

module.exports = router;