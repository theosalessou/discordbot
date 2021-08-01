//PING PONG COMMAND 

module.exports.run = async (client, message, args) => {
  const m = await message.channel.send('ping?');

  m.edit(`🏓 **| Pong!**\nLatência do Server: **${m.createdTimestamp -
      message.createdTimestamp}ms.**\nLatência da API: **${Math.round(
      client.ws.ping
    )}ms**`
  );
};

//**Todos os emojis do servidor : :Zoom: :Yey: :Yammer: :WOWO: :Word: :uu: :Tome: :Terceiro: :Teams: :Stonks: :Socorro: :Sim: :SharePoint: :Segundo: :sad: :Robux: :Primeiro: :PowerPoint: :Outlook: :Opan: :OneNote: :OneDrive: :NotStonks: :NOSSO: :Nao: :NANI: :massa: :LUL: :KKKKKJOTA: :KEKE: :HOHO: :HeheBuoy: :Hehe: :q_:  :Gmail: :friozin: :F_: :Excel: :Diamante_Nitro: :cafe: :Boost: :blz: :Aviso: :ava: :Amor: :amongdab: :WumpusDance: :Wel: :Twitter: :Twitch: :Rainbow_Nitro: :Rainbow_Boost: :pug_bebado: :Pin: :Petmong: :Pensandoaasaaaaa: :Oa: :Nitro_Jetpack: :NezukoRUN: :lcome: :golpes: :Fogo_Verde: :Fogo_Roxo: :Fogo_Rosa: :Fogo_Preto: :Fogo_Branco: :Fogo_Amarelo: :Double_Pagagaio: :Discord: :Direitaa: :Diamante: :DANCE: :Danca_Colorida: :coracao: :Cima: :BANIDO: :Baixo:**
 