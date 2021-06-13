const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// Router for posting feedback to server
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
// .Router to get data history on admin page
router.get('/', (req, res) => {
    // Find all orders and return them
    console.log('in router.GET')
    pool.query('SELECT * FROM "feedback";').then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error GET /feedback', error);
        res.sendStatus(500);  
    });
})

// Delete Route
router.delete('/:id', (req, res) => {
    const deleteID = req.params.id
    // delete item with id of deleteId
    const queryText = `DELETE FROM "feedback" WHERE "id" = $1;`
    pool.query(queryText, [deleteID])
        .then(result => {
            res.sendStatus(204)
        }).catch(err => {
            console.error(err)
            res.sendStatus(500);
        })
})
// End Delete Route


module.exports = router;