const Discord = require("discord.js");
const botconfig = require("../botsettings.json");


module.exports.run = async (bot, message, args) => {
    let member;
  
  if (message.mentions.members.first()) {
    member = message.mentions.members.first();
  } else if (args[0]) {
    member = message.guild.members.cache.get(args[0]).member;
  } else {
    member = message.author;
  }
  
  let avatar = member.displayAvatarURL({size: 4096, dynamic: true});
  // 4096 is the new biggest size of the avatar.
  // Enabling the dynamic, when the user avatar was animated/GIF, it will result as a GIF format.
  // If it's not animated, it will result as a normal image format.
  
  const embed = new Discord.MessageEmbed()
  .setTitle(`${member.tag} avatar`)
  .setDescription(`[Avatar of **${member.tag}**](${avatar})`)
  .setColor(0x1d1d1d)
  .setImage(avatar)
  
  return message.channel.send(embed);
}

exports.help = {
  name: "avatar",
  description: "Display a user avatar",
  usage: "avatar [@user | user ID]",
  example: "avatar @ray#1337 \navatar"
}

exports.conf = {
  aliases: ["icon", "pfp", "ava"],
  cooldown: 5
}

module.exports.config = {
    name: "avatar",
    description: "",
    usage: "?avatar",
    accessableby: "Agents",
    aliases: ['']
}
