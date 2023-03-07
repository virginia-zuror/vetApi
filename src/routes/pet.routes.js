const express = require('express');
const PetsRoutes = express.Router();
const {upload} = require("../middlewares/file.middleware")
const {
  getAllPets,
  getPetById,
  createPet,
  updatePetById,
  deletePetById,
} = require('../controllers/pet.controller');

PetsRoutes.get('/all', getAllPets);
PetsRoutes.get('/:id', getPetById);
PetsRoutes.post('/', upload.single('image'), createPet);
PetsRoutes.patch('/:id',updatePetById);
PetsRoutes.delete('/:id', deletePetById);

module.exports = PetsRoutes;
