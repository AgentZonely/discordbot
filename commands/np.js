const Discord = require("discord.js");
const botconfig = require("../botsettings.json");


module.exports.run = async (bot, message, args) => {
    const serverQueue = message.client.queue.get(message.guild.id);
  if (!serverQueue) return message.channel.send("There is nothing playing.");
  return message.channel.send(
    `🎶 Now playing: **${serverQueue.songs[0].title}**`
  );
};

module.exports.config = {
    name: "np",
    description: "",
    usage: "?np",
    accessableby: "Agents",
    aliases: ['']
}