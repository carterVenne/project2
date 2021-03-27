const { Post } = require('../models');

const postData = [
    {
        post_content: "The Star Wars prequels are absolute crap.",
        user_id: 1
    },
    {
        post_content: "I actually kinda like pineapple on pizza?",
        user_id: 2
    },
    {
        post_content: "I don't think we as a society need Katy Perry.",
        user_id: 3
    },
    {
        post_content: "Babies are not cute.",
        user_id: 4
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
