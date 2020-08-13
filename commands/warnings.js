const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
const db = require("quick.db");

module.exports.run = async (bot, message, arg) => {
    const user = message.mentions.members.first() || message.author
    
  
    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)
    
    
    if(warnings === null) warnings = 0;

    let requested = message.author;
    
    let warnEmbed = new Discord.MessageEmbed()
    .setTitle(`${user}'s warnings`)
    .addField("Warnings", warnings)
    .setFooter(`Requested by ${requested}`)
    
    message.channel.send(warnEmbed)
  

}

module.exports.config = {
    name: "warnings",
    description: "Shows the warnings of a user",
    usage: "?warnings <user>",
    accessableby: "Mods and Admins",
    aliases: []
}