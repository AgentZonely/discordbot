const Discord = require("discord.js");
const botsettings = require("../botsettings.json");
const canvacord = require("canvacord");


module.exports.run = async (bot, message, arg) => {
let avatar = message.mentions.users.first() ? message.mentions.users.first().displayAvatarURL({size: 512, format: "png"}) : message.author.displayAvatarURL({size: 512, format: "png"})
    
    let image = await canvacord.trigger(avatar)
    let attachment = new discord.MessageAttachment(image, "trigger.gif")
    message.channel.send(attachment)
  }

function match(msg, i) {
  if (!msg) return undefined;
  if (!i) return undefined;
  let user = i.members.cache.find(
    m =>
      m.user.username.startsWith(msg) ||
      m.user.username === msg ||
      m.user.username.includes(msg) ||
      m.displayName.startsWith(msg) ||
      m.displayName === msg ||
      m.displayName.includes(msg)
  );
  if (!user) return undefined;
  return user.user;
}

module.exports.config = {
    name: "trigger",
    description: "Triggers the users avatar lol",
    usage: "?trigger <user>",
    accessableby: "Everyone",
    aliases: ['']
}