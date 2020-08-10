const Discord = require("discord.js");
const botsettings = require("../botsettings.json");


module.exports.run = async (bot, message, arg) => {
    let perms = message.member.permissions.has("ADMINISTRATOR")
    if(!perms) return message.channel.send(`${message.author.username}, you dont have perms lol`)
    let user = message.mentions.members.first()
    if(!user) return message.channel.send("Mention a user to remove the role from!")

      let role = message.mentions.roles.first()
      if(!role) return message.channel.send(`Mention a role to remove from ${user}!`)

      message.channel.send(`Successfully removed the role ${role} from ${user}!`)
      user.roles.remove(role)
}



module.exports.config = {
    name: "removerole",
    description: "Removes a role from a specified member/bot",
    usage: "?removerole <user> <role>",
    accessableby: "Admins, Mods",
    aliases: []
}
