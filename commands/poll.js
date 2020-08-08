const Discord = require("discord.js");
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0])
    if(!channel){
        return message.channel.send('Did you know that you have to mention a **channel** to create the poll in?!')
    }
    let question = message.content.slice(bot.prefix.length+5+channel.id+3)
    if(!question){
        return message.channel.send('Why do you want to create a poll without asking a question lmao.')
    }
    const embed = new Discord.MessageEmbed()
    .setTitle('New Poll!')
    .setDescription(question)
    .setFooter(`Poll created by **${message.author.username}**`)
  let message = await bot.channels.cache.get(channel.id).send(embed)
   await message.react("👍")
   await message.react("👎")
}