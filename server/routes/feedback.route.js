const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.post('/', (req, res) => {
    console.log(req.body);
    let feedback = req.body;
    if(feedback.flagged === '' || feedback.flagged === '2'){
        feedback.flagged = false;
    } else if (feedback.flagged === '1'){
        feedback.flagged = true;
    }
    let queryString = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments", "flagged") VALUES ($1, $2, $3, $4, $5)`
    pool.query(queryString, [feedback.feeling, feedback.understanding, feedback.support, feedback.comments, feedback.flagged]).then(()=>{
        res.sendStatus(201)
    }).catch((err) =>{
        console.log(err)
        res.sendStatus(500);
    })
});

module.exports = router;