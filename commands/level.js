const Discord = require("discord.js");
const botsettings = require("../botsettings.json");
const db = require("quick.db");


module.exports.run = async (bot, message, arg) => {
const user = message.mentions.users.first() || message.author;
    
    if(user.id === bot.user.id) { //IF BOT
      return message.channel.send("😉 | I am on level 100")
    }
    
    if(user.bot) {
      return message.channel.send("Bot do not have levels")
    }
    
    let xp = db.get(`xp_${user.id}_${message.guild.id}`) || 0;
    
    const {level, remxp, levelxp} = getInfo(xp);
    if(xp === 0) return message.channel.send(`**${user.tag}** is out of xp`)
    
    let embed = new discord.MessageEmbed()
    .setAuthor(user.username, message.guild.iconURL())
    .setColor("#ff2050")
    .setThumbnail(user.avatarURL())
    .setDescription(`**LEVEL** - ${level}
**XP** - ${remxp}/${levelxp}`)
    
 message.channel.send(embed)   
       
}

module.exports.config = {
    name: "level",
    description: "SHows the level and xp of a user",
    usage: "?level / ?level <user>",
    aliases: []
}