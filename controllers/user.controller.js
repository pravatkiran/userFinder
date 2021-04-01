const User = require('../models/user.model');
const sequelize = require('../config/connection');



exports.getAll = async (req, res) => {
    try {
        console.log('req.body', req.body);
        let users = await User.findAll();
        if (!users)
            return res.status(422).json({ status: 'fail', msg: 'Unable to fetch Users.' });
        return res.status(200).json({ status: 'ok', users: users })
    } catch (err) {
        console.log('error', err);
    }
}

exports.getNearestUser = (req, res) => {
    try {
        let queryData = '"'.replace(/"/g, "'") + JSON.stringify(req.body) + '"'.replace(/"/g, "'");
        console.log('req.body', req.body);
        sequelize.query('CALL GetNearUser(' + queryData + ')').then((entity) => {
            console.log('response', entity);
            if (!entity)
                return res.status(422).json({ status: 'fail', msg: 'Unable to fetch data' });
            return res.status(200).json({ status: 'ok', users: entity });
        })

    } catch (err) {
        console.log('error ', err);
    }
}