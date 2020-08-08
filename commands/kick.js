const Discord = require("discord.js");
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("KICK_MEMBERS")) {
        return message.channel.send(`**${message.author.username}**, Its just a waste of time trying to kick someone without perms`)
      }
      
      if(!message.guild.me.hasPermission("KICK_MEMBERS")) {
        return message.channel.send(`**${message.author.username}**, Atleast give me perms before you kick someone smh.`)
      }
      
      let target = message.mentions.members.first();
      
      if(!target) {
        return message.channel.send(`**${message.author.username}**, How are you gonna kick _**NO ONE?!**_`)
      }
      
      if(target.id === message.author.id) {
       return message.channel.send(`**${message.author.username}**, Why are you trying to kick yourself lol`)
      }
      
    if(!args[1]) {
      return message.channel.send(`**${message.author.username}**, Atleast give a **reason** to why you are kicking ${target} from the server`)
    }
      
      let embed = new Discord.MessageEmbed()
      .setTitle(`**${target}** was kicked from the server!`)
      .setDescription(`Kicked **${target}** (${target.id})`)
      .setColor("#ff2050")
      .setFooter(`Kicked by ${message.author.username}`);
      
      message.channel.send(embed)
      
      target.kick(args[1]);
      
      
      
    }

module.exports.config = {
    name: "kick",
    description: "Kicks a user",
    usage: "?kick",
    accessableby: "Admins",
    aliases: []
}