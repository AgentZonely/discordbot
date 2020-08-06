const Discord = require("discord.js");
const botconfig = require("../botsettings.json");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {
    if (!args[0]) return message.channel.send(`You did not specify your time!`);
    if (!args[0].endsWith("d") && !args[0].endsWith("h") && !args[0].endsWith("m"))
      return message.channel.send(`**The time needs to have days (d) or hours (h) or minutes (m)**`);
    if (isNaN(args[0][0])) return message.channel.send(`It must be a number you know that?`);

    let prize = args.slice(1).join(" ");
    if (!prize) return message.channel.send(`Are you srsly gonna create a giveaway with no **PRIZE?!** smh.`);
  
    let Embed = new discord.MessageEmbed()
      .setTitle(`New giveaway!`)
      .setDescription(`Host: ${message.author}\nTime: ${args[0]}\nPrize: ${prize}`)
      .setTimestamp(Date.now() + ms(args[0]))
      .setColor(`BLUE`);
    let m = await message.channel.send(Embed);
    m.react("🎉");
    setTimeout(() => {
      if (m.reactions.cache.get("🎉").count <= 1) {
        const embed = new discord.MessageEmbed()
        .setColor("RED")
        .setDescription("No winners")
        m.edit(embed)
        return message.channel.send(`This server is so lonely that nobody entered and I could'nt pick a winner LOL`);
      }

      let winner = m.reactions.cache.get("🎉").users.cache.filter((b) => !b.bot).random();
      
      const embed = new discord.MessageEmbed()
      .setColor("GREEN")
      .setDescription(`Winner: ${winner}`)
      m.edit(embed)
      
      message.channel.send(`The winnder of the giveaway is ${winner}`);
    }, ms(args[0]));
}

module.exports.config = {
    name: "giveaway",
    description: "Creates a giveaway",
    usage: "?giveaway",
    accessableby: "Agents",
    aliases: [""]
}