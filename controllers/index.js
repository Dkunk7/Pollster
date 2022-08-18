const router = require('express').Router();

// Are any or all of these necessary?
const apiRoutes = require('./api');
const editRoutes = require('./edit-routes.js');
const homeRoutes = require('./home-routes.js');

router.use('/api', apiRoutes);
router.use('/edit', homeRoutes);
router.use('/', editRoutes);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;