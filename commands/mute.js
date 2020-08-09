const Discord = require("discord.js");
const botsettings = require("../botsettings.json");

module.exports.run = async (bot, message, arg) => {
    if(!message.member.hasPermission(['ADMINISTRATOR'])) return;
    let member = message.mentions.members.first() || message.guild.members.cache.get(arg[0]) || message.guild.members.cache.find(x => x.user.username === args.slice(0).join(" ") || x.user.username === args[0])
    if(member.hasPermission(['ADMINISTRATOR']) && !message.member.hasPermission('ADMINISTRATOR')) return;

        let mutedRole = message.guild.roles.cache.get('715174114641444876');
        let verifiedRole = message.guild.roles.cache.get('ROLE ID (705360471762665535)');
        if(mutedRole) {
            member.roles.add(mutedRole);
            member.roles.remove(verifiedRole);
            message.channel.send("User was Successfully muted.");
        }
}

module.exports.config = {
    name: "mute",
    description: "",
    usage: "?mute",
    accessableby: "Members",
    aliases: []
}