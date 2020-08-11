const Discord = require("discord.js");
const botsettings = require("../botsettings.json");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports.run = async (bot, message, arg) => {
    let timeout = 86400000
    let amount = 1000

   let daily = await db.fetch(`daily_${message.author.id}`)

   let embedDaily = new Discord.MessageEmbed()
   .setTitle(`You have already collected your daily 1000 coins!, You can come back in **${time.hours}h ${time.minutes}m ${time.seconds}s**`)
   if (daily != null && timeout - (Date.now() - daily) > 0) {
       let time = ms(timeout - (Date.now() - daily));
       message.channel.send(embedDaily)
   }
}



module.exports.config = {
    name: "daily",
    description: "",
    usage: "?daily",
    accessableby: "Members",
    aliases: []
}

