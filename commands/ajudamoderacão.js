const Discord = require("discord.js");
 
module.exports.run = (client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setTitle('<a:fire_blue_persec:870349471542829099> Comando de Moderação <a:fire_blue_persec:870349471542829099>')
    .setColor('#00fff')
    .setDescription('**<a:Blue_Arrow_Right:870382948204032101> lb!ban <@usuário>**\nUse esse comando para banir alguém\n**<a:Blue_Arrow_Right:870382948204032101> lb!lock <#chat>**\nUse esse comando para bloquear algum chat\n**<a:Blue_Arrow_Right:870382948204032101> lb!clear <quantidade>**\nUse esse comando para apagar alguma certa quantidade de mensagens no chat\n**<a:Blue_Arrow_Right:870382948204032101> lb!createcall <nome da call>**\nUse esse comando para criar alguma call\n**<a:Blue_Arrow_Right:870382948204032101> lb!createchat <nome do chat>**\nUse esse comando para criar algum chat\n**<a:Blue_Arrow_Right:870382948204032101> lb!say <mensagem>**\nUse esse comando para falar alguma mensagem pelo bot\n**<a:Blue_Arrow_Right:870382948204032101>lb!setnick <@usuário> <nick>**\nUse esse comando para escolher o nick de alguém automaticamente\n**<a:Blue_Arrow_Right:870382948204032101> lb!unlock <chat>**\nUse esse comando para desbloquear algum chat')
    .setTimestamp()
    .setFooter(`Comando feito pelo usuario: ${message.author.username} `)
    message.channel.send(embed);
}