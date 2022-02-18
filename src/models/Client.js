const mongoose = require('mongoose');

// Define the properties for the model in mongodb
const clientSchema = new mongoose.Schema(
  {
    name: {
      type: 'string',
      require: [true,'Name is required'],
      trim: true,
      maxlength: [40, 'Name should be at most 40 characters']
    },
    email: {
      type: 'string',
      trim: true,
    },
    phone: {
      type: 'number',
    },
    message: {
      type: 'string',
      maxlength: [150, 'Name should be at most 40 characters']
    }
  }, 
  { 
    timestamps: true,
    versionKey: false,
  }
)

// When the model exist we dont need to created again
module.exports = mongoose.models.Client || mongoose.model('Client', clientSchema);