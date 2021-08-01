//BAN COMMAND

const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
  message.delete()
  if(!message.member.permissions.has("BAN_MEMBERS")) {
    return message.reply("** Você não pode **`Banir Membros`**! *")
  }
  
  if(!message.guild.me.permissions.has("BAN_MEMBERS")) {
    return message.reply("** Eu não posso **`Banir Membros`**! **")
  }
  
  let membro = message.mentions.members.first() || message.guild.members.cache.get(args[0])
  if(!membro) return message.reply("**Você precisa mencionar alguém para banir!**")
  if(membro.user.id === message.author.id) {
    return message.reply("**Você não pode se banir.**")
  }
  if(membro.user.id === client.user.id) {
    return message.reply("**Por que você quer me banir?**")
  }
  if(!membro.bannable) {
    return message.reply("**Você não pode banir esse membro!**")
  }
  if(membro.permissions.has("ADMINISTRATOR")) {
    return message.reply("Eu não posso banir esse membro, ele é um **`Administrador` **!**")
  }
  
  let motivo = args.slice(1).join(" ")
  if(!motivo) motivo = "**Indefinido**"
  
  const embed = new Discord.MessageEmbed()
  .setTitle("**Alguém foi banido!**")
  .setColor("#00fff")
  .addField("**Membro**", membro.user.tag, false)
  .addField("**Moderador**", message.author.tag, false)
  .addField("**Razão**", motivo, false)
  message.channel.send(embed)
  membro.ban({reason: motivo})
  
}