const router = require('express').Router()
const homeRoutes = require('./homeRoutes')
const apiRoutes = require('./api')
router.use('/api', apiRoutes)
router.use('/', homeRoutes)


router.get('/', async (req, res) => {
  // Here, index.html is rendered
  res.sendFile(path.join(__dirname, '../views/index.html'));
});

module.exports = router