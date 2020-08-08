const Discord = require("discord.js");
const botsettings = require("../botsettings.json");
const ms = require('ms');

module.exports.run = async (bot, message, args) => {
    if(!args[0]) return Discord.MessageEmbed()
    .setTitle('Please specify a time')
    message.channel.send(embed);

    if(!args[0].endsWith("d") &&!args[0].endsWith("h") &&!args[0].endsWith("m")) return let = new Discord.MessageEmbed()
    .setTitle("bruh")
    .setDescription("Atleast specify how long u want the giveaway to be!")
    message.channel.send(embed);
    if(isNaN(args[0][0])) return let = new Discord.MessageEmbed()
    .setTitle("Whatever you just typed as the duration is NOT a number!")
    message.channel.send(embed);
    let channel = message.mentions.channels.first()
    if(!channel) return let = new Discord.MessageEmbed()
    .setTitle("You can't create a giveaway without **mentioning** a **channel** lol")
    message.channel.send(embed);
    let prize = args.slice(2).join(" ")
    if(!prize) return let = new Discord.MessageEmbed()
    .setTitle("Don't you wanna give out something _**NERD**_ (jk lol)")
    message.channel.send(embed);
    Discord.MessageEmbed()
    .setTitle(`Giveaway created in **${channel}!**`)
    message.channel.send(embed);
    let embed = new Discord.MessageEmbed()
    .setTitle("Sup Nerds (jk)")
    .setDescription(`**${author.id}** is giving away **${prize}**`)
    .setTimestamp(Date.now()+ms(args[0]))
    .setColor("YELLOW")
   let m = await message.channel.send(embed);
   m.react("🎉")
    .setTimeout(() => {
        let winner = m.reactions.cache.get("🎉").users.cache.filter(u=> !u.bot).random()
        channel.send(`Congratz **${winner}** you have won **${prize}!!!**`)
    }, ms(args[0]));


}

    module.exports.config = {
        name: "giveaway",
        description: "",
        usage: "?giveaway",
        accessableby: "Agents",
        aliases: []
    }
    