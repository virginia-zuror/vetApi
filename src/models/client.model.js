const mongoose = require('mongoose')

const clientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    surname:{
        type: String,
        required: true,
        trim: true,
      },
    adress: {
      type: String,
      required: false,
      trim: true,
    },
    telephone: {
        type: Number,
        required: false,
        trim: true,
      },
    pets:[
        { type: mongoose.Schema.Types.ObjectId, ref: 'pets', required: true },
      ],
  },
  {
    timestamps: true,
  }
)

const ClientModel = mongoose.model('clients', clientSchema)

module.exports = ClientModel