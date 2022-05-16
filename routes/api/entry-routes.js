const router = require('express').Router();
const { SequelizeScopeError } = require('sequelize/types');
const { User, Entry, Comment } = require('../../models');

// create GET route for getting all entries
router.get('/', async (req, res) => {
    try {
        const entryData = await Entry.findAll({
            attributes: { exclude: ['updatedAt']},
            include: [
                {
                    model: User,
                    attributes: ['username']
                },
                {
                    model: Comment,
                    attributes: ['comment']
                }
            ]
        });
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// create GET route for getting one entry
router.get('/:id', async (req, res) => {
    try {
        const entryData = await Entry.findByPk(req.params.id, {
            include: [
                {
                    model: Comment,
                    attributes: ['comment']
                }
            ]
        });

        if(!entryData) {
            res.status(404).json({Message: 'No entry found with that id!'});
            return;
        }

        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// create POST route for posting entries
router.post('/', async (req, res) => {
    // create a new entry
    Entry.create({
        title: req.body.title,
        content: req.body.content,
        user_id: req.body.user_id,
        comment_id: req.body.comment_id
    }) .then((entry) => {
        // create pairings between comments and entries
        // if no comments, just respond
    res.status(200).json(entry);
    })
    //link between entry and comments here, might actually need entryComments model/route?
    .catch((err) => {
        console.log(err);
        res.status(400).json(err);
    });
});

// Update Entry
router.put('/:id', (req, res) => {
    // update entry
    Entry.update(req.body, {
        where: {
            id: req.params.id,
        },
    })
    .then(() => {
        // find all associated comments from entryComment?
        // get list of current comment_ids
    })
})