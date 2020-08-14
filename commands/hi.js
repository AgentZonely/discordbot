const Discord = require("discord.js");
const botsettings = require("../botsettings.json");


module.exports.run = async (bot, message, arg) => {
    message.channel.send("Hello peeps :D")
}



module.exports.config = {
    name: "hi",
    description: "",
    usage: "?hi",
    accessableby: "Agents",
    aliases: ['']
}

