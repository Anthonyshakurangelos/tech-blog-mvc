const router = require('express').Router();
const { Blog } = require('../../models');
const { User } = require('../../models');
const withAuth = require('../../utils/auth');
// include User
// don't forget to add withAuth back in 
router.post('/', withAuth, async (req, res) => {
  try {
    const newBlog = await Blog.create({
      ...req.body,
      user_id: req.session.user_id,
      include: [{ model: User }],
    });

    res.status(200).json(newBlog);
  } catch (err) {
    res.status(400).json(err);
  }
});
router.put('/:id', withAuth, async (req, res) => {
  try {
    const newBlog = await Blog.update({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newBlog);
  } catch (err) {
    res.status(400).json(err);
  }
});
// this one also needs withAuth
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const blogData = await Blog.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!blogData) {
      res.status(404).json({ message: 'No Blog found with this id!' });
      return;
    }

    res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
