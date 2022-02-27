const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    listing_id: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    booking_id: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
        },
    booking_date: {
        type: String,
        required: true,
        default: Date.now,
    },
    booking_start: {
        type: String,
        required: true,
    },
    booking_end: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },

});

const Booking = mongoose.model("Booking", BookingSchema);
module.exports = Booking;