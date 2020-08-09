const Discord = require("discord.js");
const botsettings = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    if(!message.member.permissions.has("ADMINISTRATOR")) return new Discord.MessageEmbed()
    .setTitle("ERROR!")
    .setDescription("You don't have permissions lol")
    message.channel.send(embed);

    //?poll <channel mention> <question>
    const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0])
    if(!channel){
       return message.channel.send("Bruh, Mention a channel to create the poll in")
    }
    let question = message.content.slice(bot.prefix.length+5+channel.id.length+3)
    if(!question){
        return message.channel.send('Why do u wanna create a poll without asking a question lol')
    } const embed = new Discord.MessageEmbed()
    .setTitle(`Sup nerds! ${message.author.id} wants to ask u a question!`)
    .setDescription(question)
    .setColor("YELLOW")
    let message = await bot.channels.cache.get(channel.id).send(embed)
     await msg.react('👍')
     await msg.react('👎')
}



module.exports.config = {
    name: "Poll",
    description: "Creates a simple poll",
    usage: "?poll <channel id> <question>",
    aliases: []
}