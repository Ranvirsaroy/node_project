const express = require('express');
const router = express.Router();
//example of a route parameter
router.get('/users/:id', (req, res) => {
    res.send (`User ID: ${req.params.id}`);
    
});

//example of a query parameter
router.get('/search', (req, res) => {
    res.send(`Search Query: ${req.query.q}`);
});

//example of a middleware function
router.use((req, res, next) => {
    console.log(`Request Method: ${req.Method}, Request URL: ${req.url}`);
    next();
});
module.exports = router;