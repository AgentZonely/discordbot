const Discord = require('discord.js');
const randomPuppy = require('random-puppy');
const usedCommand = new Set();

module.exports.run = async (bot, message, arg) => {
    const subReddits = ["meme", "me_irl", "dankmeme"]
    const random = subReddits[Math.floor(Math.random() * subReddits.length)];
    const img = await randomPuppy(random);

    const embed = new Discord.MessageEmbed()
    .setImage(img)
    .setTitle(`From /r/${random}`)
    .setURL(`http://reddit.com/${random}`)

    message.channel.send(embed);
}

module.exports.config = {
    name: "meme",
    description: "",
    usage: "?meme",
    accessableby: "Agents",
    aliases: []
}