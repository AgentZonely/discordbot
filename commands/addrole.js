const Discord = require("discord.js");
const botsettings = require("../botsettings.json");


module.exports.run = async (bot, message, arg) => {
    let perms = message.member.permissions.has("ADMINISTRATOR")
    if(!perms) return message.channel.send(`${message.author.username}, you dont have perms lol`)
    let user = message.mentions.members.first()
    if(!user) return message.channel.send("Mention a user to add the role to!")

      let role = message.mentions.roles.first()
      if(!role) return message.channel.send(`Mention a role to give to ${user}!`)

      message.channel.send(`Successfully added ${role} to ${user}!`)
      user.roles.add(role)
}



module.exports.config = {
    name: "addrole",
    description: "Adds a role to a specified member/bot",
    usage: "?addrole <user> <role>",
    accessableby: "Admins, Mods",
    aliases: ['']
}
