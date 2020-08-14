const Discord = require("discord.js");
const botsettings = require("../botsettings.json");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports.run = async (bot, message, arg) => {
    let timeout = 86400000
    let amount = 1000

   let daily = await db.fetch(`daily_${message.author.id}`)
   let time = ms(timeout - (Date.now() - daily));

   let embedDaily = new Discord.MessageEmbed()
   .setTitle(`You have already collected your daily 1000 coins!, You can come back in **${time.hours}h ${time.minutes}m ${time.seconds}s**`)
   .setColor("RED")
   if (daily != null && timeout - (Date.now() - daily) > 0) {
       message.channel.send(embedDaily)
   } else {
       let embedDaily2 = new Discord.MessageEmbed()
       .setTitle(`Daily`, message.author.displayAvatarURL)
       .setColor("GREEN")
       .setDescription("**Daily Rewards**")
       .addField(`Collected`, amount)
       message.channel.send(embedDaily2)

       db.add(`money_${message.author.id}`, amount)
       db.add(`daily_${message.author.id}`, Date.now())
   }
}



module.exports.config = {
    name: "daily",
    description: "",
    usage: "?daily",
    accessableby: "Members",
    aliases: ['']
}

