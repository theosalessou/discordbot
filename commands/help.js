const Discord = require("discord.js");
 
module.exports.run = (client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setAuthor('Olá, aqui está todas as informações!')
    .setColor('#00fff')
    .setDescription('**<a:fire_blue_persec:870349471542829099> Comandos <a:fire_blue_persec:870349471542829099>**\n<a:Blue_Arrow_Right:870382948204032101> lb!helpfun\n<a:Blue_Arrow_Right:870382948204032101> lb!helpmoderation\n<a:Blue_Arrow_Right:870382948204032101> lb!helputils\n\n**<a:fire_blue_persec:870349471542829099> Links <a:fire_blue_persec:870349471542829099>**\n<a:Blue_Arrow_Right:870382948204032101> Server: https://discord.gg/xJhnnURbWA\n<a:Blue_Arrow_Right:870382948204032101> Twitter: https://twitter.com/theosalessou1\n<a:Blue_Arrow_Right:870382948204032101> Pastebin: https://pastebin.com/u/theosalessou\n<a:Blue_Arrow_Right:870382948204032101> Steam: https://steamcommunity.com/id/theosalessou/\n <a:Blue_Arrow_Right:870382948204032101> osu!: https://osu.ppy.sh/users/18608480\n<a:Blue_Arrow_Right:870382948204032101> Roblox: https://web.roblox.com/users/1022377626/profile\n<a:Blue_Arrow_Right:870382948204032101> Add Bot: https://bit.ly/addloboazulbot')
    .setImage('https://share.creavite.co/F6WQwkPLcVbLaunu.gif')
    .setTimestamp()
    .setFooter(`Comando feito pelo usuario: ${message.author.username} `)
  
    message.channel.send(embed);
}