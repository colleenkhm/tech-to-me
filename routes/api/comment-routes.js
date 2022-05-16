const router = require('express').Router();
const { Entry, User } = require('../../models');

// create GET route to get all comments
router.get('/', async (req, res) => {
    // find all comments
    try {
        const commentData = await Comment.findAll({
            include:
            [{
                model: Entry,
                attributes: ['title', 'content']
            }]
        });
        res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;