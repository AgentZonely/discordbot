const Discord = require("discord.js");
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, mesage, args) => {
    let pollChannel = message.mentions.channels.first();
    let pollDescription = args.slice(1).join(' ');

    let embedPoll = new Discord.MessageEmbed()
    .setTitle('😲 New Poll! 😲')
    .setDescription(pollDescription)
    .setColor('YELLOW')
    let msgEmbed = await pollChannel.send(embedPoll);
    await msgEmbed.react('👍')
    await msgEmbed.react('👎')
}


module.exports.config = {
    name: "Poll",
    description: "Creates a poll for members to vote",
    usage: "?poll",
    accessableby: "Agents",
    aliases: []
}