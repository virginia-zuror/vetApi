const Client = require('../models/client.model');

async function getAllClients(req, res, next) {
  try {
    const clients = await Client.find().populate('pets');
    res.status(200).json(clients);
  } catch (error) {
    return next(error);
  }
}

async function getClientById(req, res, next) {
  try {
    const { id } = req.params;
    const client = await Client.findById(id);
    res.status(200).json(client);
  } catch (error) {
    return next(error);
  }
}

async function createClient(req, res, next) {
  try {
    const client = new Client(req.body);
    const clientDB = await client.save();
    res.status(201).json(clientDB);
  } catch (error) {
    return next(error);
  }
}

async function updateClientById(req, res, next) {
  try {
    const { id } = req.params;
    const updateClient = await Client.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updateClient);
  } catch (error) {
    return next(error);
  }
}

async function deleteClientById(req, res, next) {
  try {
    const { id } = req.params;
    const client = await Client.findByIdAndDelete(id);
    res.status(200).json(client);
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getAllClients,
  getClientById,
  updateClientById,
  deleteClientById,
  createClient,
};
