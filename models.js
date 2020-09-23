const mongoose = require("mongoose")

var discordSignupSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        index: true
    }
})

var discordInviteSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    inviteUrl: {
        type: String,
        required: true,
        unique: true,
        index: true
    }
})


module.exports = {
    DiscordSignup: mongoose.model('discordSignup', discordSignupSchema),
    DiscordInvite: mongoose.model('discordInvite', discordInviteSchema)
}