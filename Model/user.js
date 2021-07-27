var mongoose = require('mongoose');
const {Schema} = mongoose


const userSchema = new Schema({
    
  firstName: {
    type: Schema.Types.String,
  },
  lastName: {
    type: Schema.Types.String,
  },
  email: {
    type: Schema.Types.String,
  },
  password: {
    type: Schema.Types.String,
  },
  avatar: {
    type: Schema.Types.String,
  },
  briefIntro: {
    type: Schema.Types.String,
  },
  aboutMe: {
    type: Schema.Types.String,
  },
  resourceInfo: {
    type: Schema.Types.String,
  },
  resourceList:[{
    type: Object
  }],
  socialMedia:[{
    type: Object
  }],
  myRecipes: [
    {
      trip: {
        type: Schema.Types.ObjectId,
        ref: 'Recipes',
      }
    }
  ]
    
},
   
{
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);
