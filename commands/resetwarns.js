const Discord = require("discord.js");
const botsettings = require("../botsettings.json");
const db = require("quick.db");


module.exports.run = async (bot, message, arg) => {
if(!message.member.hasPermission("ADMINISTRATOR")) {
    return message.channel.send("Yopu should have admin perms to use this command")
  }
  
  const user = message.mentions.members.first()
  
  if(!user) {
  return message.channel.send("Please mention the person whose warning you want to reset")
  }
  
  if(message.mentions.users.first().bot) {
    return message.channel.send("Bot are not allowed to have warnings")
  }
  
  if(message.author.id === user.id) {
    return message.channel.send("You are not allowed to reset your own warnings!")
  }
  
  let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)
  
  if(warnings === null) {
    return message.channel.send(`${message.mentions.users.first().username} does not have any warnings`)
  }
  
  db.delete(`warnings_${message.guild.id}_${user.id}`)

  let rembedDm = new Discord.MessageEmbed()
  .setTitle("Hi there!")
  .setDescription(`All your warnings have been resetted by **${message.author.username}** from **${message.guild.name}**`)
  .setColor("BLUE")
  user.send(rembedDm)
  let rembedGuild = new Discord.MessageEmbed()
  .setTitle("Success")
  .setDescription(`You have successfully resetted all the warnings of **${message.mentions.users.first().username}!**`)
  .setColor("GREEN")
  .setFooter(`Reset by **${message.author.username}**`)
  await message.channel.send(`Reseted all warnings of ${message.mentions.users.first().username}`)
  

  
}

module.exports.config = {
    name: "resetwarns",
    description: "Resets warnings",
    usage: "?rwarns <user>",
    aliases: ["rwarns"]
}