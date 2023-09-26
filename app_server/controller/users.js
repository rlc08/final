const User = require('../model/user');

const getUser = async (req, res) => {
    const { id } = req.params;
    console.log(id);
    try {
        const user = await User.findById(id);
        res.status(200).json(user);

    } catch (err) {
        res.status(404).json({message : err.message});
    }
};

module.exports = {getUser};