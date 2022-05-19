const seedUsers = require('./user-seeds');
const seedEntry = require('./entry-seeds');
const seedTags = require('./comment-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');
    await seedEntry();
    console.log('\n----- ENTRIES SEEDED -----\n');
    await seedComment();
    console.log('\n----- COMMENTS SEEDED -----\n');

    process.exit(0);
};

seedAll();