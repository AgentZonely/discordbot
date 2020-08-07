const Discord = require("discord.js");
const botconfig = require("../botsettings.json");


module.exports.run = async (bot, message, args) => {
    const { channel } = message.member.voice;
    if (!channel)
      return message.channel.send(
        "How are you gonna listen to **music** without being in a voice channel lol"
      );
    const serverQueue = message.client.queue.get(message.guild.id);
    if (!serverQueue)
      return message.channel.send(
        "There is nothing playing that I could stop for you."
      );
    serverQueue.songs = [];
    serverQueue.connection.dispatcher.end("The **stop** command has been used!");
};

module.exports.config = {
    name: "stop",
    description: "",
    usage: "?stop",
    accessableby: "Agents",
    aliases: ['']
}
