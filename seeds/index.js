const seedPosts = require('./post-seeds');
const seedComments = require('./comment-seeds');
const userData = require('./userData.json');
const { User } = require('../models');

const sequelize = require('../config/connection');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
      console.log('\n----- DATABASE SYNCED -----\n');

      await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
      });
      console.log('\n------- USERS SEDDED --------\n')
    
      await seedPosts();
        console.log('\n----- POSTS SEEDED -----\n');
    
      await seedComments();
        console.log('\n----- COMMENTS SEEDED -----\n');
    
      process.exit(0);
    };
    
    seedDatabase();