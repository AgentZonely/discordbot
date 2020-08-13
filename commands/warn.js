const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
const db = require("quick.db");

module.exports.run = async (bot, message, arg) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) {
        return message.channel.send("No perms!")
      }
      
      const user = message.mentions.members.first()
      
      if(!user) {
        return message.channel.send("Please Mention the person to who you want to warn - warn <user> <reaosn>")
      }
      
      if(message.mentions.users.first().bot) {
        return message.channel.send("You can not warn bots")
      }
      
      if(message.author.id === user.id) {
        return message.channel.send("You can not warn yourself")
      }
      
      if(user.id === message.guild.owner.id) {
        return message.channel.send("You can't warn the ownere OMEGALUL")
      }
      
      const reason = arg.slice(1).join(" ")
      
      if(!reason) {
        return message.channel.send("Please provide reason to warn - warn <user> <reason>")
      }
      
      let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)
      
      if(warnings === 3) {
        return message.channel.send(`${message.mentions.users.first().username} already reached his/her limit with 3 warnings`)
      }
      
      if(warnings === null) {
        db.set(`warnings_${message.guild.id}_${user.id}`, 1)
        user.send(`You have been warned in **${message.guild.name}** for ${reason}`)
        await message.channel.send(`You warned **${message.mentions.users.first().username}** for ${reason}`)
      } else if(warnings !== null) {
          db.add(`warnings_${message.guild.id}_${user.id}`, 1)
         user.send(`You have been warned in **${message.guild.name}** for ${reason}`)
        await message.channel.send(`You warned **${message.mentions.users.first().username}** for ${reason}`)
      }
      
    
    } 

module.exports.config = {
    name: "warn",
    description: "Warns a user",
    usage: "?warn <user> <reason>",
    accessableby: "Mods and Admins",
    aliases: []
}
