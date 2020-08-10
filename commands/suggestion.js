const Discord = require("discord.js");
const botsettings = require("../botsettings.json");

module.exports.run = async (bot, message, arg) => {
let channel = message.mentions.channels.first();
        if(!channel) return message.reply("Mention a channel lol");

        let sent = await channel.send(new Discord.MessageEmbed()
            .setTitle("Ticket System")
            .setDescription("React with 🎫 open a ticket!")
            .setFooter("Ticket System")
            .setColor("00ff00")
        );

        sent.react('🎫');
        settings.set(`ticket-${message.guild.id}`, sent.id);

        let embed = new Discord.MessageEmbed()
        .setTitle(`Ticket created in **${channel}**`)
        message.channel.send(embed)
    

    if(command == "close") {
        if(!message.channel.name.includes("ticket-")) return message.channel.send("You cannot use that here!")
        message.channel.delete();
    }
};

bot.on('messageReactionAdd', async (reaction, user) => {
    if(user.partial) await user.fetch();
    if(reaction.partial) await reaction.fetch();
    if(reaction.message.partial) await reaction.message.fetch();

    if(user.bot) return;
});

module.exports.config = {
    name: "ticketsetup",
    description: "Create a new ticket",
    usage: "?ticketsetup <channel>",
    accessableby: "Mods, Admins",
    aliases: []
}