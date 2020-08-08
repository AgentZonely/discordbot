const Discord = require("discord.js");
const botsettings = require("../botsettings.json");
const used = new Map();
const Duration = new require('humanize-duration');


module.exports.run = async (bot, message, args) => {
    


const cooldown = used.get(message.author.id);
if(cooldown) {
    const remaining = Duration(cooldown - Date.now(), { units: ['h', 'm'], round: true });
    return messgae.reply(`C'mon slow it down, you can use another command in ${remaining}`).catch((err) => message.reply(`${err}`)); 
}
else {
    message.channel.send("Hello peeps :D")

    used.set(message.author.id, Date.now() + 1000 * 60 * 60 * 24);
    setTimeout(() => { used.delete(message.author.id), 1000 * 60 * 60 * 24});
}
};


module.exports.config = {
    name: "hi",
    description: "",
    usage: "?hi",
    accessableby: "Agents",
    aliases: ['hi']
}

