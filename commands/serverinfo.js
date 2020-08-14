const Discord = require("discord.js");
const botsettings = require("../botsettings.json");
const usedCommand = new Set();

module.exports.run = async (bot, message, arg) => {
const { guild } = message

    const { name, region, memberCount, owner, afkTimeout } = guild
    const icon = guild.iconURL()

    const embed = new Discord.MessageEmbed()
      .setTitle(`Server info for "${name}"`)
      .setThumbnail(icon)
      .addFields(
        {
          name: 'Region',
          value: region,
        },
        {
          name: 'Members',
          value: memberCount,
        },
        {
          name: 'Owner',
          value: owner.user.tag,
        },
        {
          name: 'AFK Timeout',
          value: afkTimeout / 60,
        }
      )

    message.channel.send(embed)
  }

  module.exports.config = {
    name: "serverinfo",
    description: "",
    usage: "?serverinfo",
    accessableby: "Agents",
    aliases: ['']
}