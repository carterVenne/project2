const { Post } = require('../models');

const postData = [
    {
        title: "The Star Wars prequels are absolute crap.",
        post_content: "George Lucas is an ass. He ruined my childhood with this unnecessary filth.",
        user_id: 1
    },
    {
        title: "I actually kinda like pineapple on pizza?",
        post_content: "I don't understand what the big deal is. Either order it or don't, but stop getting so emotional about it.",
        user_id: 2
    },
    {
        title: "I don't think we as a society need Katy Perry.",
        post_content: "She sucks. Big. Can we vote her off or something?",
        user_id: 3
    },
    {
        title: "Babies are not cute.",
        post_content: "That is all",
        user_id: 4
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
