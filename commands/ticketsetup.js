const Discord = require("discord.js");
const botsettings = require("../botsettings.json");
const bot = new Discord.Client({disableEveryone: true});
const enmap = require('enmap');
const settings = new enmap({
    name: "settings",
    autoFetch: true,
    cloneLevel: "deep",
    fetchAll: true
});

module.exports.run = async (bot, message, arg) => {
    const user = message.author.id;
    const name = "ticket-" + user;
    if(message.guild.channels.cache.find(ch => ch.name == name)){
        message.channel.send("You have already opened a ticket!")
    }else{
message.guild.channels.create(name).then((chan)=>{
chan.updateOverwrite(message.guild.roles.everyone, {
    SEND_MESSAGES: false,
    VIEW_CHANNEL: false
})
chan.updateOverwrite(user,{
    SEND_MESSAGES: true,
    VIEW_CHANNEL: true
})
message.channel.send("I have created a ticket for you");
chan.send("Support will be here shortly").then((m)=>{
    m.pin()
})
})   
 }
    }


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