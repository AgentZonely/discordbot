const Discord = require("discord.js");
const botsettings = require("../botsettings.json");
const ytdl = require('ytdl-core')


module.exports.run = async (bot, message, arg) => {
    if (message.content.startsWith(`${bot.prefix}stop`)) {
        if(!message.member.voice.channel) return message.channel.send("ha. how do u expect me to _**stop**_ if I am not playing anything?!")
        message.member.voice.channel.leave()
        return undefined
    }
}



module.exports.config = {
    name: "stop",
    description: "stops the current song",
    usage: "?stop",
    accessableby: "Members",
    aliases: []
}