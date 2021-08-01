const Discord = require("discord.js");
 
module.exports.run = (client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setTitle('<a:fire_blue_persec:870349471542829099> Comandos Úteis <a:fire_blue_persec:870349471542829099>')
    .setColor('#00fff')
    .setDescription('**<a:Blue_Arrow_Right:870382948204032101> lb!avatar <@usuário>**\nUse esse comando para ver o avatar de alguém\n**<a:Blue_Arrow_Right:870382948204032101> lb!botinfo**\nUse esse comando para ver as informações do bot\n**<a:Blue_Arrow_Right:870382948204032101> lb!bugreport <bug>**\nUse esse comando para reportar algum bug diretamente ao meu criador\n**<a:Blue_Arrow_Right:870382948204032101> lb!help**\nUse esse comando para receber ajuda\n**<a:Blue_Arrow_Right:870382948204032101> lb!helpfun**\nUse esse comando para receber ajuda sobre os comandos de diversão\n**<a:Blue_Arrow_Right:870382948204032101> lb!helpmod**\nUse esse comando para receber ajuda sobre os comandos de moderação\n**<a:Blue_Arrow_Right:870382948204032101> lb!helputils**\nUse esse comando para receber ajuda sobre os comandos úteis\n**<a:Blue_Arrow_Right:870382948204032101> lb!ping**\nUse esse comando para ver o ping do bot\n**<a:Blue_Arrow_Right:870382948204032101> lb!serverinfo**\nUse esse comando para ver as informações do servidor em que você usou o comando\n**<a:Blue_Arrow_Right:870382948204032101> lb!suggestion**\nUse esse comando para dar uma sugestão ao servidor ou ao bot (esse comando é exclusivo para as pessoas que estão no servidor, mas você pode dar uma sugestão mesmo não estando no servidor, que sua sugestão será enviada do mesmo jeito)\n**<a:Blue_Arrow_Right:870382948204032101> lb!uptime**\nUse esse comando para ver a quanto tempo estou online\n**<a:Blue_Arrow_Right:870382948204032101> lb!vote**\nUse esse comando para votar no bot')
    .setTimestamp()
    .setFooter(`Comando feito pelo usuario: ${message.author.username} `)
    message.channel.send(embed);
}