const Discord = require("discord.js");
const botsettings = require("../botsettings.json");
const ms = require("ms");

module.exports.run = async (bot, message, arg) => {
    if(!arg[1]) return message.channel.send("Hey nerd! specify a time!")

    if(!arg[1].endsWith("d") &&!arg[1].endsWith("h") &&!arg[1].endsWith("m")) 
    if(isNaN(arg[1][1]) return message.channel.send("Whatever you just typed as the duration is NOT a number!")
    let channel = message.mentions.channels.first()
    if(!channel) return message.channel.send("You can't create a giveaway without **mentioning** a **channel** lol")
    let prize = arg.slice(2).join(" ")
    if(!prize) return message.channel.send("Don't you wanna give out something _**NERD**_ (jk lol)")
    message.channel.send("Giveaway created in **${channel}!**")

    let embed = new Discord.MessageEmbed()
    .setTitle("Sup Nerds (jk)")
    .setDescription(`**${author.id}** is giving away **${prize}**`)
    .setTimestamp(Date.now()+ms(arg[1]))
    .setColor("YELLOW")
   let m = await message.channel.send(embed);
   m.react("🎉")
    .setTimeout(() => {
        let winner = m.reactions.cache.get("🎉").users.cache.filter(u=> !u.bot).random()
        channel.send(`Congratz **${winner}** you have won **${prize}!!!**`)
    }, ms(arg[1]));


}

    module.exports.config = {
        name: "giveaway",
        description: "",
        usage: "?giveaway",
        accessableby: "Agents",
        aliases: []
    }
    