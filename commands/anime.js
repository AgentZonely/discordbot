const Discord = require("discord.js");
const botsettings = require("../botsettings.json");
const kitsu = require('kitsu');
const kitsu = new Kitsu;
const aq = require('animequote');


module.exports.run = async (bot, message, arg) => {
if(!args.length) {
    return message.channel.send("Please Give Anime Name")
  }
  //DEFINE OPTIONS
  
  let option = {
    url: `https://kitsu.io/api/edge/anime?filter[text]=${args.join(" ")}`,
    method: `GET`,
    headers: {
      'Content-Type': "application/vnd.api+json",
      'Accept': "application/vnd.api+json"

    },
    json: true
  }
  
  
  message.channel.send("Fetching The Info").then(msg => {
    get(option).then(body => {
     try {
      let embed = new MessageEmbed()
      .setTitle(body.data[0].attributes.titles.en)
      .setColor("RED")
      .setDescription(body.data[0].attributes.synopsis)
      .setThumbnail(body.data[0].attributes.posterImage.original)
      .addField("Ratings", body.data[0].attributes.averageRating)
      .addField("TOTAL EPISODES", body.data[0].attributes.episodeCount)
      //.setImage(body.data[0].attributes.coverImage.large)
      //try it
      
      
      message.channel.send(embed)
      msg.delete();
      
     } catch (err) {
      msg.delete();
       return message.channel.send("Unable to find this anime");
     }
      
      
      
    }                 
                     
  )})
  
}

module.exports.config = {
    name: "anime",
    description: "Gives information about anime",
    usage: "?anime <anime name>",
    accessableby: "Members",
    aliases: []
}
