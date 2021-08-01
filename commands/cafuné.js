//PAT COMMAND

const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
`https://i.imgur.com/2lacG7l.gif`,
`https://i.imgur.com/UWbKpx8.gif`,
`https://i.imgur.com/4ssddEQ.gif`,
`https://i.imgur.com/nPr3s5D.gif`,
`https://i.imgur.com/XxJga2f.gif`,
`https://i.imgur.com/LUypjw3.gif`,
`https://i.imgur.com/NNOz81F.gif`,
`https://images-ext-2.discordapp.net/external/SeoTCRfJ_Gstc4Xl2LNktjQ92VBqXwknxOUzMVjkgWc/https/loritta.website/assets/img/actions/headpat/generic/gif_8.gif?width=1266&height=733`,
`https://images-ext-2.discordapp.net/external/zIf6UDBfeza4-wPx2Gxtr-5hzJcUW5T6EQT7ShUbBGc/https/loritta.website/assets/img/actions/headpat/generic/gif_13.gif?width=1266&height=712`
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('**lembre-se de mencionar um usuário válido para fazer cafuné!**');
}

let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Cafuné')
        .setColor('#00fff')
        .setDescription(`${message.author} acaba de fazer cafuné em ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('OwO')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}