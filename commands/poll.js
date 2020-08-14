const Discord = require("discord.js");
const botsettings = require("../botsettings.json");

module.exports.run = async (bot, message, arg) => {
    if(!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send("You dont have permissions lol")

    //?poll <channel mention> <question>
    const channel = message.mentions.channels.first() || message.guild.channels.cache.get(arg[0])
    if(!channel){
       return message.channel.send("Bruh, Mention a channel to create the poll in")
    }
    let question = arg.slice(2).join(" ")
    if(!question){
        return message.channel.send('Why do u wanna create a poll without asking a question lol')
    } const embed = new Discord.MessageEmbed()
    .setTitle(`Sup nerds! **${message.author.username}** wants to ask u a question!`)
    .setDescription(question)
    .setColor("YELLOW")
    let msg = await bot.channels.cache.get(channel.id).send(embed)
     await msg.react('👍')
     await msg.react('👎')
}



module.exports.config = {
    name: "poll",
    description: "Creates a simple poll",
    usage: "?poll <channel id> <question>",
    aliases: ['']
}