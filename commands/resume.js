const Discord = require("discord.js");
const botconfig = require("../botsettings.json");


module.exports.run = async (bot, message, args) => {
    const serverQueue = message.client.queue.get(message.guild.id);
  if (serverQueue && !serverQueue.playing) {
    serverQueue.playing = true;
    serverQueue.connection.dispatcher.resume();
    return message.channel.send("▶ Resumed the music for you!");
  }
  return message.channel.send("There is nothing playing.");
};

module.exports.config = {
    name: "resume",
    description: "",
    usage: "?resume",
    accessableby: "Agents",
    aliases: ['']
}