const { DiscordAPIError, MessageEmbed } = require("discord.js")
const Discord = require("discord.js");
const botsettings = require("../botsettings.json");

module.exports.run = async (bot, message, arg) => {
let perm = message.member.hasPermission("ADMINISTRATOR")

let embed = new Discord.MessageEmbed()
   .setTitle("ERROR")
   .setDescription("**You don't have perms lol**")
   .setColor("RED")
if(!perm) return message.channel.send(embed)

let user = message.mentions.members.first()
let embed2 = new Discord.MessageEmbed()
.setTitle("Mention a user to nick!")
if(!user) return message.channel.send(embed2)

let name = arg.slice(2).join(" ")
let embed3 = new Discord.MessageEmbed()
.setTitle("Atleast give the name the user will be nicked to lol")
.setColor("BLUE")
if(!name) return message.channel.send(embed3)

user.setNickname(name)

let embed4 = new Discord.MessageEmbed()
.setTitle(`Successfully nicked **${user.user.tag}** to **${name}!**`)
.setColor("GREEN")

message.channel.send(embed4)

}

module.exports.config = {
    name: "nick",
    description: "Nicks a user",
    usage: "?nick <user> <name>",
    accessableby: "Admins, Mods",
    aliases: ['']
}