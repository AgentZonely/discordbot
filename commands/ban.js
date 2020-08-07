const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("BAN_MEMBERS")) {
        return message.channel.send(`**${message.author.username}**, Its just a waste of time trying to ban someone without perms`)
      }
      
      if(!message.guild.me.hasPermission("BAN_MEMBERS")) {
        return message.channel.send(`**${message.author.username}**, Atleast give me perms before you ban someone smh.`)
      }
      
      const target = message.mentions.members.first();
      
      if(!target) {
        return message.channel.send(`**${message.author.username}**, How are you gonna ban _**NO ONE?!**_`)
      }
      
      if(target.id === message.author.id) {
        return message.channel.send(`**${message.author.username}**, Why are you trying to ban yourself lol`)
      }
      
     
      
     if(!args[1]) {
       return message.channel.send(`**${message.author.username}**, Atleast give a **reason** to why you are banning ${target} from the server`)
     }
      
      let embed = new Discord.MessageEmbed()
      .setTitle("The ban hammer has spoken!")
      .setDescription(`Banned ${target} (${target.id})`)
      .setColor("#ff2050")
      .setThumbnail(target.avatarURL)
      .setFooter(`Banned by ${message.author.tag}`);
      
      message.channel.send(embed)
      target.ban(args[1])
      
      
      
    }
  

module.exports.config = {
    name: "ban",
    description: "Bans a Users",
    usage: "?ban",
    accessableby: "Admins",
    aliases: []
}