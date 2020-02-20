const express = require ('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

mongoose.connect("mongodb+srv://arthurdb1999:arthurdb1999@researchroom-vdqcn.mongodb.net/CRUD-Node?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

console.log('db connected');

app.use(cors());

app.use(express.json());

app.use(routes);

app.listen(3333);