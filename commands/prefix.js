const Discord = require("discord.js");
const botconfig = require("../botsettings.json");


module.exports.run = async (bot, message, args) => {
    if (message.author.bot) return; // Ignore if the user is a bot.
  
  let pref = db.get(`prefix.${message.guild.id}`);
  let prefix;
  
  if (!pref) {
    prefix = "?"; // If the server doesn't have any custom prefix, return default.
  } else {
    prefix = pref;
  }
}

module.exports.config = {
    name: "Prefix",
    description: "Changes the prefix",
    usage: "?prefix",
    accessableby: "Agents",
    aliases: ['']
}