const Discord = require("discord.js")

module.exports = {
    name: "bug",
    aliases: ["reportbug", "bugreport"],
    description: "Reporta um Bug para a equipe!",
    run: async(client, message, args) => {
  message.delete().catch(O_o => { });
  let avatar = message.author.avatarURL({ dynamic: true, format: "gif", size: 1024 });
  const { guild } = message
  const icon = guild.iconURL()
  let canal = client.channels.cache.get("868891588443652107")
  let bug = args.join(' ');
  if (!bug) {
    return message.inlineReply({
      embed: {
        description: "Descreva o bug encontrado!",
        color: "#00fff"
      }
    });
  }
  let embed = new Discord.MessageEmbed()
    .setThumbnail(icon)
    .setAuthor(`${message.author.username}`, avatar)
    .setTitle("Novo Bug reportado:")
    .addField("Servidor que reportou:", `${message.guild.name}`)
    .addField("ID do servidor:", `${message.guild.id}`)
    .addField("Reportado por:", `${message.author.tag}`)
    .addField("Mençao:", `${message.author}`)
    .addField("ID de quem reportou:", `${message.author.id}`)
    .addField("Bug:", `\`${bug}\``)
    .setColor('00fff')
  canal.send(embed)

  message.reply({
    embed: {
      description: `🎟️ ${message.author}, seu bug foi computado e enviado para minha equipe, muito obrigado!`,
      color: "#00fff"
    }
  });
    }
}    