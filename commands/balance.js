const Discord = require("discord.js");
const botsettings = require("../botsettings.json");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports.run = async (bot, message, arg) => {
    let user = message.mentions.users.first() || message.author
    let money = db.fetch(`money_${user.id}`)

    let embedBal = new Discord.MessageEmbed()
    .setTitle(`**${user}'s** balance`)
    .setDescription(`Money: ${money}`)
    .setColor("RANDOM")
    if (money === null) money = 0

    message.channel.send(embedBal)
}

module.exports.config = {
    name: "balance",
    description: "",
    usage: "?bal/balance",
    accessableby: "Members",
    aliases: ['bal']
}

