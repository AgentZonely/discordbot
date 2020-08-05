const Discord = require("discord.js");
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, mesage, args) => {
    return mesage.channel.send("Hello peeps :D")
}

module.exports.config = {
    name: "hi",
    description: "",
    usage: "?hi",
    accessableby: "Agents",
    aliases: ['hi']
}