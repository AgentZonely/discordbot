const Discord = require("discord.js");
module.exports = {
    name: "hi",
    description: "",
    usage: "?hi",
    accessableby: "Agents",
    aliases: ['hi']
}

module.exports.run = async (bot, message, args) => {
    return message.channel.send("Hello peeps :D")
}

