const router = require('express').Router()
const homeRoutes = require('./homeRoutes')
const apiRoutes = require('./api')
const mainPageRoutes = require('./mainPageRoutes')

router.use('/api', apiRoutes)
router.use('/', homeRoutes)


router.get('/', async (req, res) => {
  // Here, index.html is rendered
  res.sendFile(path.join(__dirname, '../views/layouts/main.handlebars'));
});

module.exports = router