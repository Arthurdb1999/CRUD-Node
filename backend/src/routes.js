const express = require('express');

const UserController = require('./controllers/UserController');

const routes = express.Router();

routes.post('/create', UserController.store);

routes.get('/', UserController.index);

routes.get('/update', UserController.show);

routes.post('/', UserController.destroy);

routes.post(`/update/:user_id`, UserController.update);

module.exports = routes;