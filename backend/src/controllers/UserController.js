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

    async destroy(req, res, next) {
        const { _id } = req.body.user;

        //console.log(req.body.user);

        const resDelete = await User.deleteOne({ _id: _id });

        console.log("user deleted: ", req.body.user.nome);

        return res.json(resDelete);
    },

    async update(req, res) {
        const { nome, idade, email, cidade } = req.body;
        const { user_id } = req.params;

        const resUpdate = await User.updateOne({ _id: user_id }, {
            $set: {
                nome: nome,
                idade: idade,
                email: email,
                cidade: cidade
            },
        });

        console.log("updated ", nome);

        return res.json(resUpdate);

    },

    async index(req, res) {
        const users = await User.find(req.query);
        console.log('retrieved');
        return res.json(users);

    },

    async show(req, res) {
        const { user } = req.headers;

        const currentUser = await User.findById(user)

        return res.json(currentUser);
    },
};