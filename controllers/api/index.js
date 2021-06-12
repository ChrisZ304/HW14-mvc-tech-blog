const router = require('express').Router();
const userRoutes = require('./userRoutes');
const blogRoutes = require('./blogRoutes');
const homeRoutes =

router.use('/users', userRoutes);
router.use('/blogs', blogRoutes);

module.exports = router;
