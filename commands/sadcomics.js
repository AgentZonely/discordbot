const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

module.exports.run = async (bot, message, arg) => {
    const subReddits = ["sadcomics"]
    const random = subReddits[Math.floor(Math.random() * subReddits.length)];
    const img = await randomPuppy(random);

    const embed = new Discord.MessageEmbed()
    .setImage(img)
    .setTitle(`From /r/${random}`)
    .setURL(`http://reddit.com/${random}`)

    message.channel.send(embed);
}

module.exports.config = {
    name: "sadcomics",
    description: "Gives u a sad comic",
    usage: "?sadcomics",
    accessableby: "Everyone ofc",
    aliases: ['']
}