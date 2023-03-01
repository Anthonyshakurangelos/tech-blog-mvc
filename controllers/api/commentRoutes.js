const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Comment } = require('../../models');
const { Blog } = require('../../models');
const { User } = require('../../models');

router.get('/', withAuth, async (req,res) => {

    Comment.findAll({
      where: {
        // user_Id: req.session.user_Id,
        id: req.params.id,
        // blog_id: req.params.id
    }
    })
    .then(commentData => res.json(commentData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    });
});

router.get('/:id', (req, res) => {
    Comment.findAll({
            where: {
                id: req.params.id
            }
        })
        .then(commentData => res.json(commentData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});



router.post('/', withAuth ,async (req, res) => {
  try {
    const newComment = await Comment.create({
      ...req.body,
      // id: req.params.id,
      user_Id: req.session.user_Id,
      // comment_desc: req.body.comment_desc,
      // blog_id: req.params.id,
                // user_id: req.session.user_id
      include: [{ model: User,  }],
    });
    res.json(newComment);
  } catch (err) {
    res.status(500).json(err);
  }
});




router.delete('/:id',   async (req, res) => {
  try {
    const commentData = await Comment.destroy({
      where: {
        id: req.params.id,
        // user_id: req.session.user_id,
      },
    });
    if (!commentData) {
      res.status(404).json({ message: 'No comment found with this id!' });
      return;
    }
    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;


