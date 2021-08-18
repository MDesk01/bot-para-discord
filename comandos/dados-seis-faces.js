const Discord = require("discord.js");
//Dado 6 faces
exports.run = (bot,message,args) => { 
randomNumber = Math.floor(Math.random()*(7 - 1) + 1);
message.reply("🎲Número: "+randomNumber);
if(randomNumber == 7 ) return;
}
exports.help = {
    name:"d6"
}
