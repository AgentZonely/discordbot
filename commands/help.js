const Discord = require("discord.js");
const botsettings = require("../botsettings.json");
const usedCommand = new Set();

module.exports.run = async (bot,message,arg) => {
    //We have to set a argument for the help command beacuse its going to have a seperate argument.
    let helpArray = message.content.split(" ");
    let helpArgs = helpArray.slice(1);

    //Custom Help command by using the second argument.
    if(helpArgs[0] === 'gaming') {
        return message.reply("This is a Gaming information Command.")
    }

    //Normal usage of (prefix)help without any args. (Shows all of the commands and you should set the commands yourself)
    if(!helpArgs[0]) {
        var embed = new Discord.MessageEmbed()
            .setAuthor(`Here are all the available commands:`)
            .addField("**⪢ Moderation**", 'ban, kick, mute, unmute, warn, rwarns, addrole, removerole, giveaway, poll, nick, clear')
            .addField("**⪢ Fun**", 'meme, daily, bal, avatar' )
            .addField("**⪢ Info**", 'serverinfo, memberinfo, ping')
            .addField("**⪢ Support**", 'newticket')
            .addFields({ name: 'Prefix', value: '**?**', inline: true})
            .setColor('#00FFF3')
            
        message.channel.send(embed);
    }

    //Reads the moudle.exports.config (This line of code is on commands folder, each command will read automaticly) by the second argument (the command name) and shows the information of it.
    if(helpArgs[0]) {
        let command = helpArgs[0];

        if(bot.commands.has(command)) {
            
            command = bot.commands.get(command);
            var embed = new Discord.MessageEmbed()
            .setAuthor(`${command.config.name} command`)
            .setDescription(`
             **⪢ Command's Description** ${command.config.description || "There is no Description for this command."}
             **⪢ Command's Usage:** ${command.config.usage || "No Usage"}
             **⪢ Command's Permissions:** ${command.config.accessableby || "Members"}
             **⪢ Command's Aliases:** ${command.config.aliases || "No Aliases"}
            `)
            .setColor('#2EFF00')

        message.channel.send(embed);
    }}
}

module.exports.config = {
    name: "help",
    description: "",
    usage: "?help",
    accessableby: "Members",
    aliases: ['']
}