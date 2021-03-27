const { Comment } = require('../models');

const commentData = [
    {
        user_id: 2,
        post_id: 1,
        comment_text: "I agree! Natalie Portman is also an overrated loser."
    },
    {
        user_id: 3,
        post_id: 1,
        comment_text: "How can you say that?? The prequels are better than the originals!"
    },
    {
        user_id: 1,
        post_id: 1,
        comment_text: "Wow. Just wow."
    },
    {
        user_id: 4,
        post_id: 2,
        comment_text: "Go to hell!"
    },
    {
        user_id: 5,
        post_id: 2,
        comment_text: "Your mother should be very ashamed of the job she's done here."
    },
    {
        user_id: 5,
        post_id: 3,
        comment_text: "Finally! Someone said it!"
    },
    {
        user_id: 2,
        post_id: 3,
        comment_text: "High five!"
    },
    {
        user_id: 2,
        post_id: 4,
        comment_text: "Well you obviously weren't."
    },
]


const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;