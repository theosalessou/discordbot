const Discord = require('discord.js'); 
const client = new Discord.Client({ intents: 8589934591}); 
const db = require("quick.db");
client.interaction = {}; 
const DiscordButtons = require('discord-buttons'); 
DiscordButtons(client);


client.on('clickButton', (button) => {
  ButtonPages.buttonInteractions(button, client.interaction);
}); 

client.queue = new Map();

const express = require('express');
const fs = require("fs");
const config = require("./config.json");
const app = express();
app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  response.sendStatus(200);
});
app.listen(process.env.PORT);

client.on("guildCreate", guild => {
  console.log(`----------\n➡️ Me adicionaram no servidor: ${guild.name}\n➡️ ID: ${guild.id}\n➡️ Esse servidor tem ${guild.memberCount} membros!\n----------`);
});

client.on("guildDelete", guild => {
  console.log(`----------\n➡️ Me removeram do servidor: ${guild.name}\n➡️ ID: ${guild.id}\n----------`);
});



  client.on('ready', () => {
    let activities = [
        `lb!help | ${client.guilds.cache.size} servers`,
        `❤️ Siga seus sonhos. Eu acredito em você!`,
        `lb!help | ${client.users.cache.size} usuários`,
        `🔰 Meu servidor: https://discord.gg/E2hqkpmxc6`,
        `lb!help | ${client.channels.cache.size} canais`,
      ],
      i = 0;
    setInterval(
      () =>
        client.user.setActivity(`${activities[i++ % activities.length]}`, {
          type: 'WATCHING' //WATCHING, PLAYING, STREAMING , LISTENING
        }),
      15000
    );
    console.log('----------\n🎉Estou Online!\n----------');
  });

  

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
    const embedcomandonaoexistetudo = new Discord.MessageEmbed()
    .setColor('00fff')
    .setDescription(`${message.author}, O comando informado não existe ou ainda não foi adicionado.\nUtilize **${config.prefix}ajuda** para saber meus comandos.`)
    return message.channel.send(embedcomandonaoexistetudo);
    console.error('Erro:' + err);
  }
});

client.on("message", message => {
  if (message.author.bot) return;
  if (message.channel.type == '<@788055351169777675>')
  return
  if(message.content == `<@${client.user.id}>` || message.content == `<@!${client.user.id}>`) {
  return message.channel.send({
    embed: new  Discord.MessageEmbed()
    .setColor('00fff')
    .setTitle("<a:fogo_azul:870349471542829099> Lobo Azul")
    .setDescription(`
<a:seta_azul:870382948204032101> Meu prefixo é **${config.prefix}**.
<a:seta_azul:870382948204032101> Use **${config.prefix}help** para ver meus comandos.
<a:seta_azul:870382948204032101> Meu servidor: [Clique aqui](https://discord.gg/E2hqkpmxc6)
<a:seta_azul:870382948204032101> Desenvolvido por: ! Lobo Azul#9999`)
    .setImage(`https://cdn.discordapp.com/avatars/788055351169777675/f6cdcb82c0e539e3abf56514cef0c840.png?size=4096`)
    .setTimestamp()
    .setFooter(`Executado por ${message.author.tag}`, message.author.displayAvatarURL())
  })
  }
}); // Manda mensagem ao mencionar o bot

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
}); // Carrega os eventos

//entra no canal especifico assim que o bot ficar online
    client.on("ready", () => { const channel = client.channels.cache.get("848546906866188299");//id do voice channel em que deseja que bot entre
    if (!channel) return console.error("O canal não existe!"); 
    channel.join().then(connection => { 'Funcionou!',console.log("----------\nConectado ao canal 🌌ǤΔŁáЖΞΔ ĐØ ŁØβØ🌌\n----------");}).catch(er => {'Ocorreu um erro', console.error(er); }); });
 
client.on('ready', () => {
(async()=>{
let server = client.guilds.cache.get("784079067887566868")
let canal = server.channels.cache.get("874046851249209354")
canal.send(`<a:fogo_azul:870349471542829099> <@761345167159722024>, fui reiniciado, e fui atualizado!`)
})()
} )


client.on('messageUpdate', async (message, oldMessage, newMessage) => {

  let chx = db.get(`bybaliza_${message.guild.id}`);
  if(chx === null) {
    return;
  }
       
  let ferinha_author = message.author;
  let ferinha_canal_2 = message.channel;
  let ferinha_msg_antiga = message.content;
  let ferinha_msg_editada = oldMessage.content;

  let ferinha_embed = new Discord.MessageEmbed()
  .setTitle(`📝 Mensagem Editada`)
  .setColor("00fff")
  .addFields(
    {
      name: `<:users:882655846625067068> Autor da Mensagem`,
      value: ferinha_author,
      inline: false
    },
    {
      name: `<:canal:868172925407199273> Canal`,
      value: ferinha_canal_2,
      inline: false
    },
    {
      name: `💬 Mensagem Antiga`,
      value: `\`\`\`${ferinha_msg_antiga}\`\`\``,
      inline: false
    },
    {
      name: `💬 Mensagem Nova`,
      value: `\`\`\`${ferinha_msg_editada}\`\`\``,
      inline: false
    }
  )
  .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
  .setTimestamp()
  .setFooter(message.guild.name, message.guild.iconURL());
      client.channels.cache.get(chx).send(ferinha_embed)
 })
 
 

 client.on('messageDelete', async (message, oldMessage, newMessage) => {

  let chx = db.get(`bybaliza2_${message.guild.id}`);
  if(chx === null) {
    return;
  }
       
  if(message.author.bot) return;
  
  let ferinha_author = message.author;
  let ferinha_canal_2 = message.channel;
  let ferinha_msg_del = message.content;

  let ferinha_msg_embed = new Discord.MessageEmbed()
  .setTitle(`🗑 Mensagem Excluída`)
  .setColor("00fff")
  .addFields(
    {
      name: `<:users:882655846625067068> Autor da Mensagem`,
      value: ferinha_author,
      inline: false
    },
    {
      name: `<:canal:868172925407199273> Canal`,
      value: ferinha_canal_2,
      inline: false
    },
    {
      name: `💬 Mensagem`,
      value: `\`\`\`${ferinha_msg_del}\`\`\``,
      inline: false
    }
  )
  .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
  .setTimestamp()
  .setFooter(message.guild.name, message.guild.iconURL());

  client.channels.cache.get(chx).send(ferinha_msg_embed)
});


client.login('ODgxNjg1MDgyMDUyNjQwNzc4.YSwbOA.VkDmmyl3pO2-FiiAXzahxDQ-DGk');