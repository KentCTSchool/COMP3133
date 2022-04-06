const mongoose = require('mongoose');

const ListingSchema = new mongoose.Schema({
    listing_id: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    listing_title: {
        type: String,
        required: true,
        lowercase: true
    },
    description: {
        type: String,
        required: true,
        maxlength: 10000,
        lowercase: true
    },
    street: {
        type: String,
        required: true,
        lowercase: true
    },
    city: {
        type: String,
        required: true,
        lowercase: true
    },
    postal_code: {
        type: String,
        required: true,
        lowercase: true
    },
    price: {
        type: Number,
        required: true,
        default: 0.0
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
    username: {
        type: String,
        required: true,
        minlength: 4,
        trim: true,
        lowercase: true
    },
});

const Listing = mongoose.model("Listing", ListingSchema);
module.exports = Listing;