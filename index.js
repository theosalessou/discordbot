//GENERAL

const express = require('express');
const app = express();
app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  response.sendStatus(200);
});
app.listen(process.env.PORT); 

const Discord = require("discord.js"); 
const client = new Discord.Client(); 
const config = require("./config.json"); 


client.on('message', message => {
     if (message.author.bot) return;
     if (message.channel.type == 'dm') return;
     if (!message.content.toLowerCase().startsWith(config.prefix.toLowerCase())) return;
     if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;

    const args = message.content
        .trim().slice(config.prefix.length)
        .split(/ +/g);
    const command = args.shift().toLowerCase();

    try {
        const commandFile = require(`./commands/${command}.js`)
        commandFile.run(client, message, args);
    } catch (err) {
    console.error('Erro:' + err);
  }
});

client.login(process.env.TOKEN); 

//STATUS

client.on("ready", () => {
  let activities = [
      `Digite ${config.prefix}help para obter ajuda`,
      `Estou em ${client.guilds.cache.size} servidores! ↠ lb!help `,
      `Me adicione ao seu servidor para ajudar a me manter online :D`,
      `Estou em ${client.channels.cache.size} canais! ↠ lb!help  `,
      `❤️ Siga seus sonhos.`,
      `${client.users.cache.size} usuários estão comigo! ↠ lb!help `
    ],
    i = 0;
  setInterval( () => client.user.setActivity(`${activities[i++ % activities.length]}`, {
        type: "WATCHING"
      }), 1000 * 60); 
  client.user
      .setStatus("online")
      .catch(console.error);
console.log(`----------\nEstou em ${client.guilds.cache.size} servidores!\nEstou em ${client.channels.cache.size} canais!\n${client.users.cache.size} usuários estão comigo!\n----------\nEstou online!\n----------`)
});

//MENTION RESPOND

client.on("message", msg => {
  if (msg.content === `<@!${client.user.id}>`)
    msg.channel.send('**<a:direitar:853386305094025276> | Olá! Meu prefixo neste servidor é `lb!`, para ver o que eu posso fazer, use `lb!ajuda`!**') //Pc
})

//-----------------------------------------------------


client.on("message", msg => {
  if (msg.content === `lb!add`)
    msg.channel.send('**<a:direitar:853386305094025276> | My add link is https://bit.ly/addloboazulbot**') 
})


client.on("message", msg => {
  if (msg.content === `lb!adicionar`)
    msg.channel.send('**<a:direitar:853386305094025276> | Meu link de add é https://bit.ly/addloboazulbot**') 
})

//Música
