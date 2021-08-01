const Discord = require("discord.js"); 
const db = require("quick.db")

module.exports = {
    name: "callcreate",

    run: async(client, message, args) => {
        var membro = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if (membro === message.member) return message.reply(`Você Não Tem Permissão Para Usar Este Comando`)
            if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send('Você Não Tem Permissão Para Usar Este Comando')
        let nome = args.join(" ")
        if(!nome) message.channel.send('Nome inválido')
        message.guild.channels.create(`${nome}`, {
            type : 'text',
            permissionOverwrites : [
                {
                    id : message.guild.id,
                    allow : ['VIEW_CHANNEL']
                },

            ]
        }).then(async channel=> {
          let embed55 = new Discord.MessageEmbed()
.setTitle(`Canal Criado Com Sucesso`)
.setDescription(`Entre No Canal De Texto: <#${channel.id}>`)
.setColor("#6400b6")
            message.channel.send(embed55).then(msg => msg.delete({timeout: 15000})); 
        })
    }











}