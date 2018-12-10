const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')


pool.on('connect', () => {
    console.log('connected to DB');
});

pool.on('error', (error) => {
    console.log('Error connecting to DB', error);
});

router.post('/', (req, res) => {
    console.log(req.body);
    let feedback = req.body;
    if (feedback.flagged === '' || feedback.flagged === '2') {
        feedback.flagged = false;
    } else if (feedback.flagged === '1') {
        feedback.flagged = true;
    }
    let queryString = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments", "flagged") VALUES ($1, $2, $3, $4, $5);`;
    pool.query(queryString, [feedback.feeling, feedback.understanding, feedback.support, feedback.comments, feedback.flagged]).then(() => {
        res.sendStatus(201);
    }).catch((err) => {
        console.log(err)
        res.sendStatus(500);
    })
});

router.get('/', (req, res) => {
    console.log('in Get')
    let queryString = `SELECT * FROM "feedback" ORDER BY "id" ASC;`;
    pool.query(queryString).then((result) => {
        console.log(result);
        res.send(result.rows);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    })
});

router.delete('/:id', (req, res)=>{
    let feedbackId = req.params.id;
    console.log(feedbackId);
    let queryString = `DELETE FROM "feedback" WHERE "id" = $1;`;
    pool.query(queryString, [feedbackId]).then(() =>{
        res.sendStatus(200)
    }).catch((error)=>{
        console.log(error);
        res.sendStatus(500)
    })
})
module.exports = router;