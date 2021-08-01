const Discord = require("discord.js");
 
module.exports.run = (client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setTitle('<a:fire_blue_persec:870349471542829099> Comando de Diversão <a:fire_blue_persec:870349471542829099>')
    .setColor('#00fff')
    .setDescription('**<a:Blue_Arrow_Right:870382948204032101> lb!hug <@usuário>**\nUse esse comando para abraçar alguém\n**<a:Blue_Arrow_Right:870382948204032101> lb!attack <@usuário>**\nUse esse comando para atacar alguém\n**<a:Blue_Arrow_Right:870382948204032101> lb!kiss <@usuário>**\nUse esse comando para beijar alguém\n**<a:Blue_Arrow_Right:870382948204032101>lb!pat <@usuário>**\nUse esse comando para fazer cafuné em alguém\n**<a:Blue_Arrow_Right:870382948204032101> lb!coinflip <cara/coroa>**\nUse esse comando para girar uma moeda, e ver no que vai cair\n**<a:Blue_Arrow_Right:870382948204032101> lb!kill <@usuário>**\nUse esse comando para matar alguém\n**<a:Blue_Arrow_Right:870382948204032101> lb!faustão**\nUse esse comando, e veja as frases desse fera\n**<a:Blue_Arrow_Right:870382948204032101> lb!shipp <@usuário> <@usuário>\nUse esse comando para ver as chances de formar um casal com os dois usuários mencionados**')
    .setTimestamp()
    .setFooter(`Comando feito pelo usuario: ${message.author.username} `)
    message.channel.send(embed);
}