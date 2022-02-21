const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        minlength: 4,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: [true, "Duplicate Email Not allowed"],
        trim: true,
        // validation
        validate: function (value) {
            var emailRegex = /^([\w-.]+@([\w-]+.)+[\w-]{2,4})?$/;
            return emailRegex.test(value);
        }
    },
    address:{
        street: {
            type: String,
            required: true,
        },
        suite: {
        type: String,
        required: true,
        },
        city: {
            type: String,
            required: [true, "No numbers allowed!"],
            validate: function (value) {
                var cityRegex = /^[a-zA-Z ]*$/
                return cityRegex.test(value)
            }
        },
        zipcode: {
            type: String,
            required: true,
            validate: function (value) {
                var zipRegex = /^[0-9]{5}(?:-[0-9]{4})?$/
                return zipRegex.test(value)
            }
        },
        geo: {
            lat: {
                type: Number,
                required: true,
            },
            lng: {
                type: Number,
                required: true,
            }
        }
    },
    website: {
        type: String,
        required: true,
        validate: function (value) {
            urlRegex = /https?:\/\//;
            return urlRegex.test(value);
        }
    },
    phone: {
        type: String,
        required: [true, 'No numbers allowed!'],
        validate: function (value) {
            var phoneRegex = /^\(?([0-9]{1})\)?[-.●]?([0-9]{3})\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$/
            return phoneRegex.test(value)
        }
    },
    company: {
        name: {
            type: String,
            required: true,
        },
        catchPhrase: {
            type: String,
            required: true,
        },
        bs: {
            type: String,
            required: true,
        }
    },

});

const User = mongoose.model("user", UserSchema);
module.exports = User;