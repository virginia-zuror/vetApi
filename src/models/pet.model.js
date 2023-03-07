const mongoose = require('mongoose');

const petSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    specie: {
      type: String,
      enum: ['dog', 'cat', 'rabbit', 'ferret', 'bird', 'other'],
      required: true,
      trim: true,
    },
    breed: {
      type: String,
      required: true,
      trim: true,
    },
    birth: {
      type: String,
      required: true,
      trim: true,
    },
    ID_number: {
      type: Number,
      required: true,
      trim: true,
    },
    image: { type: String, required: false, trim: true },
  },
  {
    timestamps: true,
  }
);

const PetModel = mongoose.model('pets', petSchema);

module.exports = PetModel;
