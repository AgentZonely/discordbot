const Discord = require("discord.js");
const botsettings = require("../botsettings.json");


module.exports.run = async (bot, message, arg) => {
const user = message.mentions.users.first() || message.author;
    const avatarEmbed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setAuthor(user.tag)
        .setImage(user.displayAvatarURL({dynamic: true , size: 2048}))
        .setFooter(`Requested By: ${message.author.tag}`)
        .setTimestamp()
    message.channel.send(avatarEmbed);
}

module.exports.config = {
    name: "avatar",
    description: "Generates the avater for a user",
    usage: "?avatar or ?avatar <user>",
    accessableby: "Members",
    aliases: ['']
}
