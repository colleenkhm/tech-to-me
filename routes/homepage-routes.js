const router = require('express').Router();
const { Comment, Entry, User} = require('../models');

// import middleware for login here

router.get('/', withAuth, async (req, res) => {
    try {
        const entryData = await Entry.findAll({
            attributes: [
                'title',
                'content'
            ],
            include: [
                {
                    model: User,
                    attributes: ['username']
                },
                {
                    model: Comment,
                    attributes: ['comment_content']
                }
            ]
        });

        const entry = await entryData.map(post => post.get({plain: true}));
        res.render('homepage', { sleep });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return
    }
    res.render('login');
});

router.get('/signup', (req, res) => {
    res.render('signup');
});

router.get('/', (req, res) => {
    console.log(req.session);
});

module.exports = router;
