 const Discord = require('discord.js');
module.exports = {
    name: 'lock',
    categoria:"moderação",
    description:"não deixe ninguem falar no canal!",
    aliases: ['fechar'],
    run: run
  }
async  function run(client,message,args){
    if(!message.member.hasPermission('MANAGE_CHANNELS')) {
        return message.reply('você não tem permissão para utilizar esse comando!\nPermissões exigidas: MANAGE_CHANNELS')
    }
    
    const embedlock = new Discord.MessageEmbed()
    .setTitle('🔒 Lock/Bloquear Canal')
    .setDescription('Canal bloqueado com sucesso!')
    .setColor('00fff')
    .setTimestamp()
    .setFooter('**O canal foi bloqueado com sucesso!**', message.author.displayAvatarURL({ dynamic: true }))

    try {
        message.channel.updateOverwrite(message.guild.roles.cache.find(e => e.name.toLowerCase().trim() == '@everyone'), {
            SEND_MESSAGES: false, 
            ADD_REACTIONS: false
        })
    }catch(e){
        message.channel.send(e)
    }
    message.channel.send(embedlock)
}