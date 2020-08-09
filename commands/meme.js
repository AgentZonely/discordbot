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

    if(!message.content.startsWith(prefix)) return;
    if(usedCommand.has(message.author.id)){
        const embed = new Discord.MessageEmbed()
        .setColor("RED")
        .setTitle("C'mon slow it down")
        .setDescription("You can use another command in 3 more seconds")
        message.channel.send(embed);
    } else {
        const embed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle("The cooldown is over!")
        message.channel.send(embed);
        usedCommand.add(message.author.id);
        setTimeout(() => {
            usedCommand.delete(message.author.id);
        }, 3000); //You can set the ammount of the cooldown here! Its Formated to Miliseconds.
    }

}

module.exports.config = {
    name: "meme",
    description: "",
    usage: "?meme",
    accessableby: "Agents",
    aliases: [""]
}