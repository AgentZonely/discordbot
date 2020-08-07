const Discord = require("discord.js");
const botconfig = require("../botsettings.json");


module.exports.run = async (bot, message, args) => {
    const { channel } = message.member.voice;
  if (!channel)
    return message.channel.send(
      "How are you gonna listen to **music** without being in a voice channel lol"
    );
  const serverQueue = message.client.queue.get(message.guild.id);
  if (!serverQueue) return message.channel.send("There is nothing playing.");
  if (!args[0])
    return message.channel.send(
      `The current volume is: **${serverQueue.volume}**`
    );
  serverQueue.volume = args[0]; 
  serverQueue.connection.dispatcher.setVolumeLogarithmic(args[0] / 5);
  return message.channel.send(`I have set the volume to: **${args[0]}**`);
};

module.exports.config = {
    name: "Volume",
    description: "",
    usage: "?volume",
    accessableby: "Agents",
    aliases: ['']
}

