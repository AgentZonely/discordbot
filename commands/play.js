const Discord = require("discord.js");
 const botconfig = require("../botsettings.json");
 const YouTube = require("discord-youtube-api");
 const yts = require( 'yt-search' );


    module.exports.run = async (bot, message, args) => {
        const { channel } = message.member.voice;
        if (!channel)
          return message.channel.send(
            "How are you gonna listen to **music** without being in a voice channel lol"
          );
        const permissions = channel.permissionsFor(message.client.user);
        if (!permissions.has("CONNECT"))
          return message.channel.send(
            "I cannot connect to your voice channel, make sure I have the proper permissions!"
          );
        if (!permissions.has("SPEAK"))
          return message.channel.send(
            "I cannot speak in this voice channel, make sure I have the proper permissions!"
          );
        const youtube = new YouTube(client.config.api);
        var searchString = args.join(" ");
        if (!searchString)
          return message.channel.send("How am I gonna play something if you don't tell me what you want to play lol");
        const serverQueue = message.client.queue.get(message.guild.id);
        var videos = await youtube.searchVideos(searchString).catch(console.log);
        var songInfo = await videos[0].fetch().catch(console.log);
    
        const song = {
          id: songInfo.video_id,
          title: Util.escapeMarkdown(songInfo.title),
          url: songInfo.url,
        };
    
        if (serverQueue) {
          serverQueue.songs.push(song);
          console.log(serverQueue.songs);
          return message.channel.send(
            `✅ **${song.title}** has been added to the queue!`
          );
        }
    
        const queueConstruct = {
          textChannel: message.channel,
          voiceChannel: channel,
          connection: null,
          songs: [],
          volume: 2,
          playing: true,
        };
        message.client.queue.set(message.guild.id, queueConstruct);
        queueConstruct.songs.push(song);
    
        const play = async (song) => {
          const queue = message.client.queue.get(message.guild.id);
          if (!song) {
            queue.voiceChannel.leave();
            message.client.queue.delete(message.guild.id);
            return;
          }
    
          const dispatcher = queue.connection
            .play(ytdl(song.url))
            .on("finish", () => {
              queue.songs.shift();
              play(queue.songs[0]);
            })
            .on("error", (error) => console.error(error));
          dispatcher.setVolumeLogarithmic(queue.volume / 5);
          queue.textChannel.send(`🎶 Started playing: **${song.title}**`);
        };
    
        try {
          const connection = await channel.join();
          queueConstruct.connection = connection;
          play(queueConstruct.songs[0]);
        } catch (error) {
          console.error(`I could not join the voice channel: ${error}`);
          message.client.queue.delete(message.guild.id);
          await channel.leave();
          return message.channel.send(
            `I could not join the voice channel: ${error}`
          );
        }
    };
    
    module.exports.config = {
        name: "play",
        description: "",
        usage: "?play",
        accessableby: "Agents",
        aliases: ['']
    }