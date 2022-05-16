const Entry = require('./Entry');

const User = require('./User');

const Comment = require('./Comment');

// Entry belongs to User
Entry.belongsTo(User, {
    foreignKey: 'user_id'
});

// User will have many Entries
User.hasMany(Entry, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

// Entry has many comments
Entry.hasMany(Comment, {
    foreignKey: 'entry_id',
    onDelete: 'CASCADE'
});

module.exports = {
    Entry,
    User,
    Comment,
};