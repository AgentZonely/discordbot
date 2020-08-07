const Discord = require("discord.js");
const botconfig = require("../botsettings.json");


module.exports.run = async (bot, message, args) => {
    return message.channel.send("Hello peeps :D")
}

module.exports.config = {
    name: "hi",
    description: "",
    usage: "?hi",
    accessableby: "Agents",
    aliases: ['hi']
}

