  
const Discord = require("discord.js");

function checkDays(date) {
    let now = new Date();
    let diff = now.getTime() - date.getTime();
    let days = Math.floor(diff / 86400000);
    return days + (days == 1 ? " Dia" : " Dias") + " atrás";
};
exports.run = (client, message, args) => {
     
const { guild } = message;
    let verifLevels = ["Nenhuma", "Baixo", "Medio", "(╯°□°）╯︵  ┻━┻", "┻━┻ミヽ(ಠ益ಠ)ノ彡┻━┻"];
    let region = {
        "brazil" : "🇧🇷Brasil",
        "eu-central" : "Europa Central",
        "singapore" : "Singapura",
        "us-central" : "Estados Unidos Central",
        "sydney" : "Sidney",
        "us-east" : "U.S. East",
        "us-south" : "U.S. South",
        "us-west" : "U.S. West",
        "eu-west" : "Western Europe",
        "vip-us-east" : "VIP U.S. East",
        "london" : "	London",
        "amsterdam" : "Amsterdam",
        "hongkong": "Hong Kong"
    };
    
    var emojis;
    if (message.guild.emojis.cache.size === 0) {
        emojis = 'Nenhum';
    } else {
        emojis = message.guild.emojis.cache.size;
    }
 

    const embed = new Discord.MessageEmbed()
  .setAuthor(message.guild.name, message.guild.iconURL() ? message.guild.iconURL() : client.user.displayAvatarURL())
  .setThumbnail(message.guild.iconURL())
  .setTimestamp()
  .addField("<a:hora:868175515725488159> Data de Criação", `${message.guild.createdAt.toString().substr(0, 15)},\n(${checkDays(message.guild.createdAt)})`, true)
  .addField("🆔 ID do Servidor", message.guild.id, true)
  .addField("<a:coroa:868175083414355978> Dono do Servidor", `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`, true)

  .addField("<a:mundo:868175130180861953> Região", region [message.guild.region], true)

  .addField("<:membros:868172073942528001> Membros (Total)", `**${message.guild.memberCount}** *Membros*`, true)
  

  .addField("<a:verificado:868173738254958592> Membros (Reais)", `**${message.guild.members.cache.filter(m => !m.user.bot).size}** *Reais*`, true)

  .addField("<:bot:867813721496485918> Membros (Bots)", `**${message.guild.members.cache.filter(m => m.user.bot).size}** Bots`, true)

  .addField("<:afk:871017391595868192> Tempo AFK",`**${message.guild.afkTimeout / 60 + ' Minutos'}**`, true)

  .addField("<:arroba:868172474595037255> Cargos", `**${message.guild.roles.cache.size}** *Cargos*`, true)

  .addField("<:canal:868172925407199273> Canais (Texto)",`**${guild.channels.cache.filter(ch => ch.type === 'text').size}** *Canais de Texto*`, true)

  .addField("<:som:868172859858649118> Canais (Voz)",`**${ guild.channels.cache.filter(ch => ch.type === 'voice').size}** *Canais de Voz*`, true)

  .addField("🤡 Emojis (Total)",`**${message.guild.emojis.cache.size}** *Emojis*`, true)

  .addField("<a:boost:795290271696814080> Boosts ",`**${message.guild.premiumSubscriptionCount || '0'}** *Boosts*`, true)

  .addField("🆙  Nivel de Verificação", `**${message.guild.verificationLevel}**`, true)

  .setColor('00fff')
  .setFooter(`${message.author.username}`, message.author.avatarURL());
  message.channel.send({embed});


    }