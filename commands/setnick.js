const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  
  
  if (!message.member.hasPermission(["MANAGE_GUILD", "ADMINISTRATOR"])) {
    return message.channel.send({embed: {color: "00fff", description: "Você não pode usar este comando!"}})
  }
  
  let user = message.mentions.users.first(); 
  if (!user) return message.channel.send({embed: {color: "00fff", description: "Você precisa mencionar o usuário!"}});
  
  let nick = args.slice(1).join(" ");
  if (!nick) return message.channel.send({embed: {color: "00fff", description: "Você precisa inserir o nickname!"}});
  
  let member = message.guild.members.cache.get(user.id);
  
  await member.setNickname(nick).catch(err => message.channel.send({embed: {color: "00fff", description: `Error: ${err}`}}));
  return message.channel.send({embed: {color: "00fff", description: `Alterado com sucesso **${user.tag}** nickname para **${nick}**`}});
}

exports.help = {
  name: "setnickname",
  description: "Defina um apelido de usuário.",
  usage: "/setnickname <@user> <nick>",
  example: "/setnickname ᴺᴱˣᵀᶻᴵᴺ ¹⁵⁷⁺#0001 bot157",
  
}

exports.conf = {
  aliases: ["setnick"],
  cooldown: 5
}