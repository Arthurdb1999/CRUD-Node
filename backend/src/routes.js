const express = require('express');

const UserController = require('./controllers/UserController');

const routes = express.Router();

routes.post('/create', UserController.store);
routes.get('/', UserController.index);
routes.delete('/', UserController.destroy);
routes.post(`/update/:user_id`, UserController.update);

module.exports = routes;