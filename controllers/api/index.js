const router = require('express').Router();

const userRoutes = require('./user-routes');
const pollRoutes = require('./poll-routes');
const surveyRoutes = require('./survey-routes');

router.use('/users', userRoutes);
router.use('/polls', pollRoutes);
router.use('/surveys', surveyRoutes);

module.exports = router;
