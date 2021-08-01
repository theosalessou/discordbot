const Discord = require("discord.js");

exports.run = (client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setColor('00fff')
    .setDescription(`<a:fogo_azul:870349471542829099> Olá ${message.author}, Abaixo está uma listinha sobre mim:`)
    .setTimestamp()
    .setFooter(`Comando feito por: ${message.author.username}`)
    .addFields(
        {
            name: '<a:seta_azul:870382948204032101> Meu nome e minha tag',
            value: `${client.user.tag}`,
            inline: true
        },
        {
            name: '<a:seta_azul:870382948204032101> Servidores:',
            value: `Estou em **${client.guilds.cache.size}** servidores.`,
            inline: true
        },
        {
            name: '<a:seta_azul:870382948204032101> Canais:',
            value: `Estou em **${client.channels.cache.size}** canais de texto.`,
            inline: true
        },
        {
            name: '<a:seta_azul:870382948204032101> Usuários:',
            value: `Cuido de **${client.users.cache.size}** usuários.`,
            inline: true
        },
        {
            name: '<a:seta_azul:870382948204032101> Meu ping:',
            value: `**${Math.round(client.ws.ping)}** ms`,
            inline: true
        },
        {
            name: '<a:seta_azul:870382948204032101> Meus criadores:',
            value: '! Lobo Azul#9999 e Tails_Sparkle#9597',
            inline: true
        },
        {
            name: '<a:direitav:853386440133574686> Meu servidor:',
            value: 'https://discord.gg/xJhnnURbWA',
            inline: true
        },
        {    name: '<a:direitav:853386440133574686> Invite:',
            value: 'https://bit.ly/addloboazulbot',
            inline: true
        },
    )
    message.channel.send(embed);
}