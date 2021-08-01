const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

var list = [
  'https://i.pinimg.com/originals/a5/4f/fa/a54ffa220efb58379d1428ed5d1ced1b.gif',
  'https://pa1.narvii.com/6448/6e438ddfb3466577d3da5e242cadaa324bfd6267_hq.gif',
  'http://pa1.narvii.com/5685/297ecee4da771123598b9687e06b6b2f5e81b2c5_hq.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para atacar!');
}
/*
message.channel.send(`${message.author.username} **acaba de atacar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Attack')
        .setColor('#00fff')
        .setDescription(`${message.author} atacou ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter(':attacku attacku attacku')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}