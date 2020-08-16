const Discord = require("discord.js");
const botsettings = require("../botsettings.json");


module.exports.run = async (bot, message, arg) => {
let choices = ['rock', 'paper', 'scissors'];
if (choices.includes((args[1]).toLowerCase())) {
    let number = Math.floor(Math.random() * 3);
    if (number == 1) {
        return message.channel.send('It was a tie, we both had ' + (args[1]).toLowerCase())
    }
    if (number == 2) {
        if ((args[1]).toLowerCase() == "rock") {
            return message.channel.send('I won OMEGALUL (I chose paper).')
        }
        if ((args[1]).toLowerCase() == "paper") {
            return message.channel.send('I won OMEGALUL (I chose scissors).')
        }
        if ((args[1]).toLowerCase() == "scissors") {
            return message.channel.send('I won OMEGALUL (I chose rock).')
        }
    }
    if (number == 0) {
        if ((args[1]).toLowerCase() == "rock") {
            return message.channel.send('I lost, *sad vibes* (I chose paper).')
        }
        if ((args[1]).toLowerCase() == "paper") {
            return message.channel.send('I lost, *sad vibes* (I chose rock)')
        }
        if ((args[1]).toLowerCase() == "scissors") {
            return message.channel.send('I lost, *sad vibes* (I chose paper)')
        }
    }
} else {
    return message.channel.send('Please include either: Rock, Paper, or Scissors.')
}
}

module.exports.config = {
    name: "rps",
    description: "Play a game of rock, paper, scissors",
    usage: "?rps <rock, paper, or scissors>",
    accessableby: "Everyone",
    aliases: ['']
}