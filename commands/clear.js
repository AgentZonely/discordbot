const Discord = require("discord.js");
    const botsettings = require("../botsettings.json");
    const usedCommand = new Set();

module.exports.run = async (bot, message, arg) => {

    if (!message.member.permissions.has("MANAGE_MESSAGES")) // sets the permission
            return message.channel.send(
                `${message.author.username}, How are you gonna delete messages without perms, duh. ` // returns this message to user with no perms
            );
        if (!arg[0]) {
            return message.channel.send(`Please enter an amount from 1 to 100`)
        }

        let deleteAmount;

        if (parseInt(arg[0]) > 100 ) {
            deleteAmount = 100;
        } else {
            deleteAmount = parseInt(arg[0]);
        }

        await message.channel.bulkDelete(deleteAmount, true);

        const embed = new MessageEmbed()
            .setTitle(`${message.author.username}`)
            .setThumbnail(message.author.displayAvatarURL())
            .setDescription(`Successfully deleted ${deleteAmount}`)
            .setFooter(message.author.username, message.author.displayAvatarURL())
            .setColor('#f2f2f2')
        await message.channel.send(embed)
    }


module.exports.help = {
    name: "clear",
    description: "clears messages",
    usage: "?clear",
    accessableby: "Agents",
    aliases: ['c', 'purge']
}