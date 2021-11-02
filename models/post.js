const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    title: String,
    category: String,
    image: String,
    content: String,
    date: Date,
    author_by:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    comments: 
    [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ],
    tags: Array,
    views: Number,
    minimum_cost : Number, 
    province: String,
    googlemap: String,
    openandclose: 
    {
        day:Array,
        open:String,
        close:String
    }
    
})

module.exports = mongoose.model('Post', PostSchema);