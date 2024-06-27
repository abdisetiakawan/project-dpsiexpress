const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Rute Pendaftaran
router.post('/register', async (req, res, next) => {
    try {
        const { username, password, role } = req.body;
        if (!username || !password || !role) {
            return res.status(400).json({ message: 'Please provide username, password, and role' });
        }
        const existingUser = await User.findOne({ where: { username } });
        if (existingUser) {
            return res.status(400).json({ message: 'Username already exists' });
        }
        const newUser = await User.create({ username, password, role });
        res.status(201).json({ message: 'User registered successfully', user: { id: newUser.id, username: newUser.username, role: newUser.role } });
    } catch (err) {
        next(err);
    }
});

// Rute Login
router.post('/login', async (req, res, next) => {
    try {
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(400).json({ message: 'Please provide username and password' });
        }

        const user = await User.findOne({ where: { username } });
        if (!user) {
            return res.status(401).json({ message: 'Invalid Username credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid Password credentials' });
        }

        const token = jwt.sign(
            { id: user.id, role: user.role },
            'your_jwt_secret', 
            { expiresIn: '1h' }
        );
        res.json({ message: 'Login successful', token });
    } catch (err) {
        next(err);
    }
});

module.exports = router;
