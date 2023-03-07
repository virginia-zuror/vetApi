const Pet = require('../models/pet.model');

async function getAllPets(req, res, next) {
  try {
    const pets = await Pet.find();
    res.status(200).json(pets);
  } catch (error) {
    return next(error);
  }
}

async function getPetById(req, res, next) {
  try {
    const { id } = req.params;
    const pet = await Pet.findById(id);
    res.status(200).json(pet);
  } catch (error) {
    return next(error);
  }
}

async function createPet(req, res, next) {
  try {
    const pet = new Pet({
      ...req.body,
      image: req.file
        ? req.file.path
        : 'no image found',
    });
    const petDB = await pet.save();
    res.status(201).json(petDB);
  } catch (error) {
    return next(error);
  }
}

async function updatePetById(req, res, next) {
  try {
    const { id } = req.params;
    const updatePet = await Pet.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updatePet);
  } catch (error) {
    return next(error);
  }
}

async function deletePetById(req, res, next) {
  try {
    const { id } = req.params;
    const pet = await Pet.findByIdAndDelete(id);
    res.status(200).json(pet);
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getAllPets,
  getPetById,
  updatePetById,
  deletePetById,
  createPet,
};
