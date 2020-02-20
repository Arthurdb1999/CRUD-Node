const User = require('../models/User');

module.exports = {
    async store(req, res) {
        const { nome, idade, email, cidade } = req.body;

        let user = await User.findOne({ email });

        if (!user) {
            user = await User.create({ nome, idade, email, cidade });
        }

        console.log('user created: ', nome);

        return res.json(user);
    },

    async destroy(req, res) {

    },

    async update(req, res) {

    },

    async index(req, res) {
        const users = await User.find(req.query);
        console.log('retrieved');
        return res.json(users);

    }
};