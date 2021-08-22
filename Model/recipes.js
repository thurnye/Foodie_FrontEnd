const mongoose = require('mongoose');
const {Schema} = mongoose;


const recipesSchema = new Schema({
    recipeName: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    duration: [{
        type: Object, required: true
    }],
    level: [{
        type: Object, required: true
    }],
    serving: [{
        type: Object, required: true
    }],
    
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
    notes: [{
        type: Object, required: true
    }],
    mainIngredients: [{
        type: Object, required: true
    }],
    dressingIngredients: [{
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