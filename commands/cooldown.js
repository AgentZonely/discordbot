const { DiscordAPIError } = require("discord.js");
const Discord = require("discord.js");
const botsettings = require("../botsettings.json");

const usedCommand = new Set();

module.exports.run = async (bot, message, args) => {
    if(usedCommand.has(message.author.id)){
        const embed = new Discord.MessageEmbed()
        .setColor("RED")
        .setTitle("C'mon slow it down")
        .setDescription("You can use another command in 3 more seconds")
        message.channel.send(embed);
    } else {
        const embed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle("The cooldown is over!")
        message.channel.send(embed);
        usedCommand.add(message.author.id);
        setTimeout(() => {
            usedCommand.delete(message.author.id);
        }, 3000); //You can set the ammount of the cooldown here! Its Formated to Miliseconds.
    }
}

module.exports.config = {
    name: "cooldown",
    description: "a Simple test of the Cooldown Command.",
    usage: "?cooldown",
    accessableby: "Members",
    aliases: []
}