const mongoose = require('mongoose');
const {Schema} = mongoose;


const commentsSchema = new Schema({
    comment: {
        type: String,
        require: true
    },
    rating: {
        type: Number,
        require: true
    },
    userId: { 
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    recipeId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Recipes'
    },
},
{
    timestamps: true
  }
)

module.exports = mongoose.model('Comments', commentsSchema);