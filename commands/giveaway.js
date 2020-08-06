const Discord = require("discord.js");
const botconfig = require("../botsettings.json");
const ms = require("ms");

module.exports.run = async (bot, mesage, args) => {
    if(!args[0]) return Message.channel.send(`You did not specifiy your time!`);
    if(!args[0].endsWith("d") && !args[0].endsWith("h") && !args[0].endsWith("m"))
      return message.channel.send(`The time needs to be specified in **days (d), hours (h), or minutes (m)**`);
      if (isNaN(args[0][0])) return message.channel.send(`It must be a **number** you know that?`);
      
      let prize = args.slice(1).join(" ");
      if(!prize) return message.channel.send(`Are you seriously gonna create a giveaway with no **PRIZE?!** smh.`);

      let Embed = new Discord.MessageEmbed()
      .setTitle(`New giveaway!`)
      .setDescription(`Hosted by: ${message.author}\nTime: ${args[0]}\nPrize: ${prize}`)
      .setTimestamp(Date.now() + ms(args[0]))
      .setColor(`RANDOM`);
    let m = await message.channel.send(Embed);
    m.react("🎉");
    setTimeout(() => {
        if(m.reaction.cache.get("🎉").count <= 1) {
            const embed = new Discord.MessageEmbed()
            .setColor("RED")
            .setDescription("No Winners")
            m.edit(embed)
            return message.channel.send(`This server is so lonely that no one entered and I could not pick a winner`);
        }

        let winner = m.reactions.cache.get("🎉").users.cache.filter((b) => !b.bot).random();

        const embed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setDescription(`Winner: ${winner}`)
        m.edit(embed)

        message.channel.send(`Congrats ${winner}! you have won the giveaway!`);
    }), ms(args[0]);
      
}

module.exports.config = {
    name: "Giveaway",
    description: "Creates a giveaway",
    usage: "?giveaway",
    accessableby: "Agents",
    aliases: ['g']
}