const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let pollChannel = message.mentions.channels.first();
    let pollDescription = args.slice(1).join(' ');

    let embedPoll = new Discord.MessageEmbed()
    .setTitle('😲 New Poll! 😲')
    .setDescription(pollDescription)
    .setColor('YELLOW')
    let msgEmbed = await pollChannel.send(embedPoll);
    await MessageEmbed.react('👍')
    await MessageEmbed.react('👎')
}


module.exports.config = {
    name: "Poll",
    description: "Creates a poll for members to vote",
    usage: "?poll",
    accessableby: "Agents",
    aliases: ['']
}