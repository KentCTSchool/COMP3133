const User = require('./models/User');
const Booking = require('./models/Booking');
const Listing = require('./models/Listing');

exports.resolvers = {
    Query: {
        getUserByID: async (parent, args) => {
            return User.findById(args.id);
        },
        
        listedByAdmin: async (parent, args) => {
            const listedByAdmin = await Listing.find({});
            // console.log(listedByAdmin);
            return listedByAdmin;
        },

        searchByName: async (parent, user) => {
            const name = await Listing.find({"username": user.username});
            // console.log(name);
            return name;
        },
        searchByCity: async (parent, listing) => {
            const city = await Listing.find({$or: [ {"city": listing.city}, {"postal_code": listing.city}]});
            // console.log(city);
            return city;
        },
        logListAdmin: async (parent, args) => {
            const logListAdmin = await Listing.find({"username": args.username});
            // console.log(logListAdmin);
            return logListAdmin;
        },
        logBookedUser: async (parent, args) => {
            const logBookedUser = await Booking.find({"username": args.username});
            // console.log(logBookedUser);
            return logBookedUser;
        },
    },

    Mutation: {
        login: async (parent, args) => {
            const loggedIn = await User.findOne({$and: [{"username" : args.username, "password" : args.password}]});

            console.log(loggedIn);
            return loggedIn;
        },

        addUser: async (parent, args) => {
            console.log(args)
            let newUser = new User({
                username: args.username,
                firstname: args.firstname,
                lastname: args.lastname,
                password: args.password,
                email: args.email,
                type: args.type
            })
            return newUser.save()
        },

        addListing: async (parent, args) => {
            let newList = new Listing({
                listing_id: args.listing_id,
                listing_title: args.listing_title,
                description: args.description,
                street: args.street,
                city: args.city,
                postal_code: args.postal_code,
                price: args.price,
                email: args.email,
                username: args.username
            })
            return newList.save()
        },

        addBooking: async (parent, args) => {
            let newBook = new Booking({
                listing_id: args.listing_id,
                booking_id: args.booking_id,
                booking_date: args.booking_date,
                booking_start: args.booking_start,
                booking_end: args.booking_end,
                username: args.username
            })
            return newBook.save()
        },


    }
}