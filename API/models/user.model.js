const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs')

const EMAIL_PATTERN = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const PASSWORD_PATTERN =/.{8,}/;
const SALT_WORK_FACTOR = 10;

const userSchema = new Schema ({
    name:{
        type: String,
        required: 'User name is required',
    },

    email:{
        type: String,
        required: 'User email is required',
        trim: true,
        unique: true,
        lowercase: true, 
        match:[EMAIL_PATTERN, 'Email needs at least 3 chars']  
    },

    password: {
        type: String,
        required: 'Email is required',
        trim:true,
        match: [PASSWORD_PATTERN, 'Password needs at least 8 chars']
    }


},{timestamps: true});

const User = mongoose.model('User', userSchema);
module.exports = User;