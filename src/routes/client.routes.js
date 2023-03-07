const express = require('express');
const ClientsRoutes = express.Router();
const {
  getAllClients,
  getClientById,
  createClient,
  updateClientById,
  deleteClientById,
} = require('../controllers/client.controller');

ClientsRoutes.get('/all', getAllClients);
ClientsRoutes.get('/:id', getClientById);
ClientsRoutes.post('/', createClient);
ClientsRoutes.patch('/:id', updateClientById);
ClientsRoutes.delete('/:id', deleteClientById);

module.exports = ClientsRoutes;
