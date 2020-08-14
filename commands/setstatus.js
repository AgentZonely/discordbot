
const Discord = require("discord.js");
const botsettings = require("../botsettings.json");
const db = require("quick.db")


module.exports.run = async (bot, message, arg) => {
//OWNER ONLY COMMAND
if(!message.author.id === "679340062495998002") {
    return message.channel.send("This command can only be used by owner")
  }
  //ARGUMENT
  if(!args.length) {
    return message.channel.send("Please give the status message")
  }
  
db.set(`status`, args.join(" "))
 await message.channel.send("Updated the bot status")
  process.exit(1);
  
}

module.exports.config = {
    name: "setstatus",
    description: "Sets the status of the bot",
    usage: "?setstatus <status>",
    accessableby: "BOT OWNER ONLY",
    aliases: ['']
}