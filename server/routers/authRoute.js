const express = require('express');
const router = express.Router();

router.post('/login', (req, res)=>{
    res.send('Logged In Successfully')
});

router.post('/logout', (req, res)=>{
    res.send('Logged Out');
});



module.exports = router;