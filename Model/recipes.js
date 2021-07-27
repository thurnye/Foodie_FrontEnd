const mongoose = require('mongoose');
const {Schema} = mongoose;


const recipesSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    duration: {
        type: Number,
        require: true
    },
    level: {
        type: String,
        require: true
    },
    serving: {
        type: Number,
        require: true
    },
    
    thumbnail: {
        type: String,
        require: true
    },
    tags: [{
        type: Object, 
        required: true
    }],
    category: [{
        type: Object, required: true
    }],

    review: {
        type: Number,
        require: true
    },
    additionalNotes: {
        type: String,
        require: true
    },
    ingredients: [{
        type: Object, required: true
    }],
    ingDressings: [{
        type: Object, required: true
    }],
    nutritionFacts: [{
        type: Object, required: true
    }],
    directions: [{
        type: Object, required: true
    }],
    comments: [{
        comment: {
        type: Schema.Types.ObjectId,
        ref: 'Comments',
        }
    }],
    author: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
},
{
    timestamps: true
  }
)

module.exports = mongoose.model('Recipes', recipesSchema);