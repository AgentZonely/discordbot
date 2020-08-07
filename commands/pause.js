const Discord = require("discord.js");
const botconfig = require("../botsettings.json");


module.exports.run = async (bot, message, args) => {
    const serverQueue = message.client.queue.get(message.guild.id);
  if (serverQueue && serverQueue.playing) {
    serverQueue.playing = false;
    serverQueue.connection.dispatcher.pause();
    return message.channel.send("⏸ Paused the music for you!");
  }
  return message.channel.send("There is nothing playing.");
};


module.exports.config = {
    name: "Pause",
    description: "",
    usage: "?pause",
    accessableby: "Agents",
    aliases: ['']
}