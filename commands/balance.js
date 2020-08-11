const Discord = require("discord.js");
const botsettings = require("../botsettings.json");
const fs = require("fs");
const money = require("../money.json");

module.exports.run = async (bot, message, arg) => {

    if(!arg[0]) {
        var user = message.author;
    } else {
        var user = message.mentions.users.first() || bot.users.cache.get(arg[0]);
    }

    if(!money[user.id]) {
        money[user.id] = {
            name: bot.users.cache.get(user.id).tag,
            money: 0
        }
        fs.writeFile("./money.json", JSON.stringify(money), (err) => {
            if(err) console.log(err);
        })
    }

    let a = new Discord.MessageEmbed()
        .setTitle("User's Balance")
        .setColor("RANDOM")
        .setDescription(`**${bot.users.cache.get(user.id).username}** has **${money[user.id].money.toLocaleString()} bills**.`)
        return message.channel.send(a);

}

module.exports.help = {
    name: "balance",
    description: "",
    usage: "?bal/balance",
    accessableby: "Members",
    aliases: ['bal']
}

