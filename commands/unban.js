const Discord = require("discord.js");
const botconfig = require("../botsettings.json");


module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission(["BAN_MEMBERS"])) return message.channel.send(`**${message.author.username}**, Its just a waste of time trying to ban someone without perms`)
    if(isNaN(args[0])) return message.channel.send("You need to provide an ID.")
    let bannedMember =  client.users.fetch(args[0])
        if(!bannedMember) return message.channel.send("Please provide a user id to unban someone!")

    let reason = args.slice(1).join(" ")
        if(!reason) reason = "No reason given!"

    if(!message.guild.me.hasPermission(["BAN_MEMBERS"])) return message.channel.send("I dont have permission to perform this command!")|
    message.delete()
    try {
        message.guild.members.unban(bannedMember, reason)
        message.channel.send(`**${bannedMember.tag}** has been unbanned from the server!`)
    } catch(e) {
        console.log(e.message)
    }
}


module.exports.config = {
    name: "Unban",
    description: "Unbans a banned user",
    usage: "?unban",
    accessableby: "Agents",
    aliases: [""]
}
