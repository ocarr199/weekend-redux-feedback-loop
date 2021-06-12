const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


// POST Route
router.post('/', (req, res) => {
    //destructure keys out of req.body
    console.log(req.body)
    const {
        feeling,
        understanding,
        support,
        comments
    } = req.body;
    const queryText = `
        INSERT INTO "feedback" (feeling, understanding, support, comments)
        VALUES ($1, $2, $3, $4);
    `
    const values = [feeling, understanding, support, comments];
    pool.query(queryText, values)
        .then(result => {
            res.sendStatus(201)
        }).catch(err => {
            console.error(err)
            res.sendStatus(500);
        })

})
// End POST Route

module.exports = router;