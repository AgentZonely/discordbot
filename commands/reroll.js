const Discord = require("discord.js");
const botsettings = require("../botsettings.json");
const ms = require('ms');


module.exports.run = async (bot, message, arg) => {
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('You do not have permission to reroll giveaways');

        if(!args[0]) return message.channel.send('No giveaway ID provided');

        let giveaway = bot.giveawaysManager.giveaways.find((g) => g.prize === args.join(" ")) || bot.giveawaysManager.giveaways.find((g) => g.messageID === args[0]);

        if(!giveaway) return message.channel.send('Couldn\'t find a giveaway with that ID/name');

        client.giveawaysManager.reroll(giveaway.messageID)
        .then(() => {
            message.channel.send('Giveaway rerolled')
        })
        .catch((e) => {
            if(e.startsWith(`Giveaway with ID ${giveaway.messageID} has not ended yet`)){
                message.channel.send('This giveaway hasn\'t ended yet')
            } else {
                console.error(e);
                message.channel.send('An error occured')
            }
        })
}

module.exports.config = {
    name: "reroll",
    description: "Rerolls an ended giveaway",
    usage: "?reroll <giveaway id>",
    accessableby: "Admins",
    aliases: []
}
