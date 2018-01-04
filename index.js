const Discord = require("discord.js");

const TOKEN = "Mzk3OTQxNjgxNDEwMDE1MjMz.DS7jpg.5cTMMEaMRSEYRMHP8n1jH_JIHBk"
const PREFIX = "*"

var fortunes = [
    "Yes",
    "No",
    "Maybe"
];

var bot = new Discord.Client();

bot.on("ready", function() {
    console.log("Ready");
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0].toLowerCase()) {
        case "ping":
        message.channel.send("Pong!");
        break;
    case "info":
        message.channel.send("This bot was created by Mr. Elk");
        break;
    case "8ball":
        if (args[1]) message.channel.send(fortunes[Math.floor(Math.random() * fortunes.length)]);
         else message.channel.send("Can't read that");
         break;
    case "embed":
        var embed = new Discord.RichEmbed()
            .addField("Test Title", "Test Description", true)
            .setFooter("Ignore this, it's just a test")
            .setThumbnail(message.author.avatarURL)
            .setColor(0x00FFFF)
        message.channel.send(embed);
        break;
    case "noticeme":
        message.channel.send(message.author.toString() + " I love you :heart:");
        break;
         
    default:
        message.channel.send("Invalid command");
    }
});

bot.login(TOKEN);