const Blog = require('../../models/blog');
//blog_index, blog_details, blog_create_get, blog_create_post, blog_create_delete


const router = require('express').Router();
const path = require('path');

// This is the 'get' route 
router.get('/', (req, res) => {
  Blog.find().sort({ createdAt: -1 })
  .then((result) => {
    res.render('index', {title: 'All Blogs', blogs: result })
  })
  .catch ((err) => {
    console.log(err);
  })
});

router.post('/',(req, res) => {
  const blog = new Blog(req.body);

  blog.save()
  .then((result) => {
    res.redirect('blogs');
  })
  .catch((err) => {
    console.log(err);
  })
});

router.get('/', 'create', (req, res) => {
res.render('create', { title: 'create a new blog'});
});

router.get('/:id'), (req, res) => {
  const id = req.params.id;
  Blog.findByID(id)
    .then(result => {
      res.render('details', { blog: result, title: 'Blog Details'});
    })
    .catch(err => {
      console.log(err);
    })

}
module.exports = router