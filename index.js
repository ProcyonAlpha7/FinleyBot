{
const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready",async () => {
  console.log(`${bot.user.username} is online!`);
});
  
bot.on("message",async message => {
  if(message.content = "ping") {
    message.reply("pong");
  }
});
  
bot.login(botconfig.token);
}
