const Discord = require("discord.js"); 

exports.run = async (client, message, args) => {

  let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
  
  let avatar = user.avatarURL({ dynamic: true, format: "png", size: 1024 });

  let embed = new Discord.MessageEmbed() 
    .setColor(`00fff`) 
    .setTitle(`🖼️ ${user.username}`) 
    .setDescription(`**Clique [aqui](${message.author.displayAvatarURL()}) para baixar a imagem!**`)
    .setImage(avatar);
 await message.channel.send(embed); 

};
