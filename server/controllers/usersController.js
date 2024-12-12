const User = require('../models/userModel'); 

const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

const getUserById = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const user = await User.findByPk(id);

        if (!user) {
            res.status(404).json({ message: 'User not found' });
        } else {
            res.status(200).json(user);
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

const createUser = async (req, res) => {
    try {
        const { username, email, password, role } = req.body;
        const newUser = await User.create({ username, email, password, role });
        res.status(200).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

const updateUser = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const user = await User.findByPk(id);

        if (!user) {
            res.status(404).json({ message: 'User not found' });
        } else {
            const { username, email, password, role } = req.body;
            if (username) user.username = username;
            if (email) user.email = email;
            if (password) user.password = password;
            if (role) user.role = role;
            await user.save();

            res.status(200).json({ message: 'User updated' });
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

const deleteUser = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const user = await User.findByPk(id);

        if (!user) {
            res.status(404).send('User not found');
        } else {
            await user.destroy();
            res.status(200).send('User deleted successfully');
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Error deleting user');
    }
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};
