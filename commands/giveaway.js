const {MessageEmbed, User} = require('discord.js')
const ms = require('ms')
module.exports={
    name: 'giveaway',
    description: 'Create a simple giveaway',
    usage: '<time> <channel> <prize>',
    category: 'fun',
    run: async(bot,message,args)=>{
        if(args[0]) return message.channel.send(`**Usage: <time> <channel> <prize>**`)
        if(args[0].endsWith("d")&&!args[0].endsWith("h")&&!args[0].endsWith("m")) return message.channel.send(`Please specify your time in d (days), h (hours) or m (minutes)`)
        if(isNaN(args[0])) return message.channel.send(`That is not a number!`)
        let channel = message.mentions.channels.first()
        if(!channel) return message.channel.send(`I could not find that channel in the server!`)
        let prize = args.slice(2).join(" ")
        if(!prize) return message.channel.send(`No prize specified!`)
        message.channel.send(`Giveaway crated in ${channel}`)
        let Embed = new MessageEmbed()
        .setTitle(`New Giveaway`)
        .setDescription(`The user ${message.author} is hosting a giveaway for the prize of **${prize}**`)
        .setTimestamp(Date.now()+ms(args[0]))
        .setColor(`BLUE`)
      let m = await channel.send(Embed)
      m.react("🎉")
        setTimeout(() => {
            if(m.reactions.cache.size<=1) return message.channel.send(`Not enough people reacted for me to end the giveaway :apusad:`)
            if(m.reaction.cache.size<=0) return channel.send(`No one reacted, so I could not end the giveaway :apusad:`)
            let winner = m.reaction.cache.get("🎉").users.cache.filter(u=>!u.bot)
            channel.send(`Congrats ${winner} you have won **${prize}!!!**`)
        }, ms(args[0]))

    }
}

module.exports.config = {
    name: "giveaway",
    description: "Creates a giveaway",
    usage: "?giveaway",
    accessableby: "Members",
    aliases: ['g']
}

////?giveaway #h/d/m #giveaways code