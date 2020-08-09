const Discord = require("discord.js");
const botsettings = require("../botsettings.json");
const ytdl = require('ytdl-core');


module.exports.run = async (bot, message, arg) => {
    const voiceChannel = message.member.voice.voiceChannel
    if(!voiceChannel) return message.channel.send("How are you gonna _**listen**_ to music without being in a voice channel!")
    const permissions = voiceChannel.permissionsFor(message.bot.user)
    if(!permissions.has("CONNECT")) return message.channel.send("How am I gonna join the voice channel if I don't have permissions smh.")
    if(!permissions.has("SPEAK")) return message.channel.send("How am I gonna play music if I don't have permission to speak in the voice channel!?")

    try {
       var connection = await voiceChannel.join()
   } catch (error){
      console.log(`There was an error connecting to the voice channel: ${error}`)
      return message.channel.send(`There was an error connecting to the voice channel: ${error}`)
   }

   const dispatcher = connection.play(ytdl(args[1]))
   .on('finish', () => {
       voiceChannel.leave()
   })
   .on('error', error => {
       console.log(error)
   })
   dispatcher.setVolumeLogarithmic(5 / 5)
   
} 



module.exports.config = {
    name: "play",
    description: "Plays any song when ur in a voice channel",
    usage: "?play",
    accessableby: "Members",
    aliases: []
}