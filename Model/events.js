const mongoose = require('mongoose');
const {Schema} = mongoose;


const eventsSchema = new Schema({
    eventDetails : {
        eventTitle: {
            type: String,
            required: true
        },
        location: {
            type: String,
            required: true
        },
        isOnline: Boolean,
        repeat: Boolean,
        frequency: String,
        thumbnail: {
            type: String,
            required: true
        },
        eventDescription: {
            type: String,
            required: true
        },
        addFAQs: Boolean,
        starts:{
          date: {
            type: Date,
            required: true
          },
          time: {
            type: Date,
            required: true
          }
        },
        ends:{
          date: {
            type: Date,
            required: true
          },
          time: {
            type: Date,
            required: true
          }
        },
        fAQs:[{
          ques: {
            type: String,
            required: true
          },
          ans: {
            type: String,
            required: true
          },
        }],
        organiserName: {
            type: String,
            required: true
        },
        organiserDescription: {
            type: String,
            required: true
        },
        includeLinks: Boolean
      },
      tickets : [
          {
            ticketName : {
                type: String,
                required: true
            },
            quantity: {
                type: Number,
                required: true
            },
            price: {
                type: Number,
                required: true
            },
            ticketDescription: String,
            showDescriptionOnEventPage: Boolean, //default false
            onlineSales: Boolean,
            doorSales: Boolean,
            starts: {
                date: Date,
                time: String
            },
            ends: {
                date: Date,
                time: String
            },
            ticketVisibility: Boolean,  // false, hide ticket when max is reached,
            autoHideDate:{
                date: Date,
                time: String
            },
            ticketsPerOrder: {
              min: {
                type: Number,
                required: true
                },
              max: {
                type: Number,
                required: true
            }
            }
          }
        ],
        additionalSettings: { 
            currency: {
                label: {
                    type: String,
                    required: true
                },
                symbol: {
                    type: String,
                    required: true
                },
                currency: {
                    type: String,
                    required: true
                }
            }
        },
        createdBy: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Events', eventsSchema);