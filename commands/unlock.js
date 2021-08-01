const { MessageEmbed } = require("discord.js")

module.exports.run = async(client, message, args) => {
    if(!message.member.hasPermission("MANAGE_CHANNELS"))
    return message.channel.send(
        new MessageEmbed()
        .setDescription("Você não tem permissão para usar esse comando.")
    )
    if(!message.mentions.channels.first()) return message.channel.send(
        new MessageEmbed()
        .setDescription("Você não especificou o canal para desbloquear, use: `lb!desbloq #canal`.")
    )

   await message.mentions.channels.forEach(async channel => {

        if(channel.permissionsFor(message.guild.id).has("SEND_MESSAGES") === true) return message.channel.send("O canal foi aberto.");
        try {
         await channel.updateOverwrite(message.guild.id, {
            SEND_MESSAGES: true
        });
        message.channel.send(`<#${channel.id}> foi desbloqueado com sucesso.`)
        } catch(err) {
            console.log(err);
        }
    });
}