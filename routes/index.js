// https://shrouded-atoll-72179.herokuapp.com
// https://tech-to-me.herokuapp.com/

const router = require('express').Router();
const apiRoutes = require('./api');

router.use('api', apiRoutes);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;