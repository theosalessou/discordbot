//HUG COMMAND

const Discord = require('discord.js');

exports.run = async (client, message, args) => {

  var list = [
    'https://images-ext-1.discordapp.net/external/MJRdOH9zAW4wwfuBgC8c2OLyqB7R-ECGGHkpul5jCDA/https/loritta.website/assets/img/actions/hug/female_x_male/gif_155.gif',
    'https://i.pinimg.com/originals/a8/f2/f6/a8f2f612ab90fec87a14e4266d04b812.gif',
    'https://i.pinimg.com/originals/f0/ee/e6/f0eee67fa8e98c4e5c08ce01f36dee0e.gif',
    'https://i.pinimg.com/originals/59/cb/9b/59cb9ba25443a786e082fb55cfc67ef9.gif',
    'https://pa1.narvii.com/6556/b5e9f2349abf2900b840e4fbe12e86cd98aa2369_hq.gif'
  ];

  var rand = list[Math.floor(Math.random() * list.length)];
  let user = message.mentions.users.first() || client.users.cache.get(args[0]);
  if (!user) {
    return message.reply('**lembre-se de mencionar um usuário para abraçar!**');
  }
  /*
  message.channel.send(`${message.author.username} **acaba de abraço** ${user.username}! ❤️`, {files: [rand]});
  */
  let avatar = message.author.displayAvatarURL({ format: 'png' });
  const embed = new Discord.MessageEmbed()
    .setTitle('Abraço')
    .setColor('#00fff')
    .setDescription(`${message.author} abraçou ${user}`)
    .setImage(rand)
    .setTimestamp()
    .setThumbnail(avatar)
    .setFooter('Hmmm')
    .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}