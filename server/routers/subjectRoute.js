const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.send('All Subjects')
});

router.get('/:id', (req, res)=>{
    res.send('Specified subject by Id')
});

router.post('/', (req, res)=>{
    res.send('Subject Created')
});

router.patch('/:id', (req, res)=>{
    res.send('Subject Updated')
});
router.delete('/:id',(req, res)=>{
    res.send('Subject Deleted')
});

module.exports = router;


