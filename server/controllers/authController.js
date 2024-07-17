const User = require('../Models/userModel');
const createError = require('../utils/appError');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.signup = async (req, res, next) => {
    try {
        const existinguser = await User.findOne({ email: req.body.email });
        if (existinguser) {
            return next(new createError('User already exists', 400));
        }
        const hashedpassword = await bcrypt.hash(req.body.password, 12);
        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: hashedpassword,
        });
        const token = jwt.sign({ _id: user._id }, 'secretkey123', {
            expiresIn: '1h',
        });
        res.status(201).json({
            status: 'success',
            message: 'User registered successfully',
            token,
            user
        });
    } catch (err) {
        next(err);
    }
}

exports.login = async (req, res, next) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return next(new createError('User Does Not Exist', 404));
        }
        const isMatch = await bcrypt.compare(req.body.password, user.password);
        if (!isMatch) {
            return next(new createError('Invalid credentials', 401));
        }
        const token = jwt.sign({ _id: user._id },   'secretkey123', {   expiresIn: '1h', });
        res.status(200).json({ status: 'success', message: 'User logged in successfully', token, user });
    }
    catch (err) {
        next(err);
    }
}