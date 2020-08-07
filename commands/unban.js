const Discord = require("discord.js");
const botconfig = require("../botsettings.json");


module.exports.run = async (bot, message, args) => {
    const member = args[0];

    if (!member) {
         return message.channel.send(`How are u gonna unban someone without an id lol`)
    }

    try {
        message.guild.fetchBans().then(bans => {
            message.guild.members.unban(member)
        })
        await message.channel.send(`${member} has been unbanned!`)
    } catch (e) {
        return message.channel.send(`An error occured!`)
    }

}
}
}

module.exports.config = {
    name: "hi",
    description: "",
    usage: "?hi",
    accessableby: "Agents",
    aliases: ['hi']
}