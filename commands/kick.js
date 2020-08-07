const Discord = require("discord.js");
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission('KICK_MEMBERS'))
    message.channel.send("You don't have permission to use this command.");
    else {
        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username === args.slice(0).join(" ") || x.user.username === args[0])
        if(member) {
            try {
                await member.kick();
                console.log('Kicked');
                message.channel.send(`${member} has been kicked from the server!`)
            }
            catch(err) {
                console.log(err);
            }
        }
    }
}

module.exports.config = {
    name: "kick",
    description: "Kicks a user",
    usage: "?kick",
    accessableby: "Admins",
    aliases: []
}