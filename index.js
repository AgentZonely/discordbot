const fs = require("fs")
const discord = require("discord.js")
const prefix = "?"
const client = new discord.Client()
bot.commands = new discord.Collection()

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('js'))

bot.aliases = new discord.Collection()
for (const file of commandFiles) {
  const command = require(`./commands/${file}`)
  command.aliases.forEach(alias => bot.aliases.set(alias, command.name))
  bot.commands.set(command.name, command)
}

bot.on("ready", () => {
  console.log("Im online")
})

bot.on("message" , async message => {
  if(message.author.bot) return
  
  if(!message.content.startsWith(prefix)) return
  
  if(!message.member) message.member = await message.guild.fetchMember(message);
  const args = message.content.slice(prefix.length).split(/ +/)
  const command = args.shift().toLowerCase()
  const cmd = bot.commands.get(command) || bot.commands.get(bot.aliases.get(command))
  
  if(cmd === null ) return
  
  if(cmd) cmd.run(bot, message, args)
  if(!cmd) return
})

bot.login("NzM5NTc3Mjc5OTU2NTE2OTk1.XycfBA.x17A54zD6daNrIZo_fyIZj2IPAU")