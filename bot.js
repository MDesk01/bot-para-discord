const Discord = require("discord.js");
const bot = new Discord.Client();
const config = require("./config.json");
const fs = require("fs");
bot.commands = new Discord.Collection();

fs.readdir("./comandos/", (err, files) => {
    if(err) console.error(err);
    let arquivojs = files.filter(f => f.split(".").pop() == "js");
    arquivojs.forEach((f,i) => {
        let props = require(`./comandos/${f}`);
        console.log(`O comando ${f} carregado com sucesso!`);
        bot.commands.set(props.help.name, props);
    });
});

bot.on("ready", () =>{
console.log('Preparada!');
});

bot.on("message", async message => {

if(message.author.bot) return; // SE A MENSAGEM FOR ENVIADA POR UM BOT, NÃO RESPONDER.
if(message.channel.type === "dm") return; //IGNORA MENSAGENS NO PRIVADO DO BOT.

let prefix = config.prefix;
let messageArray = message.content.split(" ");
let command = messageArray[0];
let args = messageArray.slice(1);

let arquivocmd = bot.commands.get(command.slice(prefix.length));
if(arquivocmd) arquivocmd.run(bot,message,args);

});
bot.login(config.token);
