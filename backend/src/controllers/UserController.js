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
        const { nome, idade, email, cidade, _id } = req.body;
        const { user_id } = req.params;

        const resUpdate = User.updateOne({_id: user_id}, {
            $set: {nome: nome},
            $set: {idade: idade},
            $set: {email: email},
            $set: {cidade: cidade}
        });

        console.log(resUpdate)
        console.log("updated nome: ", nome);

        return res.json(resUpdate);

    },

    async index(req, res) {
        const users = await User.find(req.query);
        console.log('retrieved');
        return res.json(users);

    }
};