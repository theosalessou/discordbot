const Discord = require("discord.js");
 
module.exports.run = (client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setTitle('<:upvote:871151140388098100> Obrigado por usar esse comando! <:upvote:871151140388098100>')
    .setColor('#00fff')
    .setDescription('**<a:Blue_Arrow_Right:870382948204032101> Olá, se você usou esse comando, é porquê você quer votar no bot. Então, obrigado!**\n\n<a:Blue_Arrow_Right:870382948204032101> Aqui está o link para você poder votar: https://top.gg/bot/788055351169777675/vote\n\n<a:Blue_Arrow_Right:870382948204032101> E se quiser me ver no site do top.gg, aqui está o link: https://top.gg/bot/788055351169777675')
    .setTimestamp()
    .setFooter(`Comando feito pelo usuario: ${message.author.username} `)
    message.channel.send(embed);
}