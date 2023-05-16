const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    userType: String,
    fullname: String,
    password: String,
    email: {
        type: String,
        unique: true
    }, 
    phone: String,
    active: Boolean,
    avatar: String
});

module.exports = mongoose.model("User", UserSchema);