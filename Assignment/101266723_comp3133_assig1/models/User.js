const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: [true, "Duplicate Email Not allowed"],
        minlength: 4,
        trim: true,
        lowercase: true
    },
    firstname: {
        type: String,
        required: [true, 'Please enter first name'],
        trim: true,
        lowercase: true
        },
    lastname: {
        type: String,
        required: [true, 'Please enter last name'],
        trim: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        uppercase: true,
        //Custom validation
        validate: function(value) {
            var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            return emailRegex.test(value);
        }
    },
    password: {
        type: String,
        minlength: 6,
        required: [true, 'Please enter password name'],
        trim: true,        
        //Custom validation
        // validate: function(value) {
        //     var emailRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#$&_])$/;
        //     return emailRegex.test(value);
        // }
    },
    type: {
        type: String,
        required: [true, 'Please enter type name'],
        trim: true,
        lowercase: true
    },

});

const User = mongoose.model("User", UserSchema);
module.exports = User;