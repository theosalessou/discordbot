//KILL COMMAND

const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
 `https://i.imgur.com/KRAGW5D.gif`,
 `https://i.imgur.com/98dnvlg.gif`,
 `https://i.imgur.com/m8ZtlNO.gif`,
 `https://i.imgur.com/1gN99rj.gif`,
 `https://media1.tenor.com/images/e9c914be61acb8f2033f2327605c5562/tenor.gif?itemid=8118409`
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('**lembre-se de mencionar um usuário válido para matar!**');
}
/*
message.channel.send(`${message.author.username} **acaba de matar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Matar')
        .setColor('#00fff')
        .setDescription(`${message.author} acaba de matar ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('Ratatatatatatata')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}


