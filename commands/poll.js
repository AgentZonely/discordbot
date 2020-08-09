const Discord = require("discord.js");
const botsettings = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    let pollChannel = message.channel.mentions.channels.first();
    let pollDescription = args.slice(1).join('');

    let embedPoll = new Discord.MessageEmbed()
    .setTitle("New Poll!")
    .setDescription(pollDescription)
    .setColor('YELLOW')
    let msgEmbed = await pollChannel.send(embedPoll);
    await msgEmbed.react('👍')
    await msgEmbed.react('👎')
}



module.exports.config = {
    name: "Poll",
    description: "Creates a poll",
    usage: "?poll <channel id> <question>",
    alisases: []
}