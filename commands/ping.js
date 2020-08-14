const Discord = require("discord.js");
const botsettings = require("../botsettings.json");


module.exports.run = async (bot, message, arg) => {
message.channel.send(`Pong! - **${client.ws.ping}ms**`)
}

module.exports.config = {
    name: "ping",
    description: "Gives the ping",
    usage: "?ping",
    accessableby: "Everyone",
    aliases: []
}