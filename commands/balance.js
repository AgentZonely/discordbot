const Discord = require("discord.js");
const botsettings = require("../botsettings.json");
const fs = require("fs");
const money = require("../money.json");

module.exports.run = async (bot, message, arg) => {
    if(!arg[0]){
        var user = message.author;
    } else {
        var user = message.mentions.users.first() || bot.users.get(arg[0]);
    }

    if(!money[user.id]){
        money[user.id] = {
            name: bot.users.get(user.id).tag,
            money: 0
        }
        fs.writeFile("../money.json", JSON.stringify(money), (err) => {
            if(err) console.log(err);
        });
    }

    return message.channel.send(`${bot.users.get(user.id).username} has ${money[user.id].money}`);
}



module.exports.config = {
    name: "balance",
    description: "shows the amount of money u have",
    usage: "?bal/?balance",
    accessableby: "Members",
    aliases: ['bal']
}

