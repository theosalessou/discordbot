module.exports = {
    name: 'faustao',
    run: async (client, message, args) => {

 let name = ('Faustão');
 let user = message.author       

 let imagens = [
    "http://i.imgur.com/PS61w6I.png",
    "http://i.imgur.com/ofr6Tkj.png",
    "http://i.imgur.com/nABrbqD.png",
    "http://i.imgur.com/igpGeyg.png",
    "http://i.imgur.com/db2TFRm.png",
    "http://i.imgur.com/RAPYIU9.png",
    "http://i.imgur.com/rVmgwZC.png",
    "http://i.imgur.com/z7Ec5I3.png"
 ]

 let imagem = imagens[Math.floor(Math.random() * imagens.length)]

 let avatar = {avatar: imagem}

 let frases = [
    "Que isso bicho, ó u cara lá ó",
    "Vamos ver as vídeo cassetadas!",
    "Voltamos já com vídeo cassetadas!",
    "ERRRROOOOOOOOOUUUUUUUU!!!!",
    "E agora, pra desligar essa merda aí, meu. Porra ligou, agora desliga! Tá pegando fogo, bicho!",
    "TÁ PEGANDO FOGO, BICHO!",
    "OLOCO!",
    "Essa fera ai, bicho!",
    "Essa fera ai, meu!",
    "Você destruiu o meu ovo! \uD83C\uDF73",
    "Ih Serjão, sujou! \uD83C\uDFC3\uD83D\uDCA8",
    "ERROU! ⚠",
    "Você vai morrer ⚰",
    "Olha o tamanho da criança",
    "Oito e sete",
    "Ô loco meu!",
    "É brincadera, bicho!",
    "Se vira nos 30!",
    "Quem sabe faz ao vivo!",
    "A TV é chata no domingo, é para quem não tem dinheiro nem o que fazer. Eu trabalho no domingo por isso. O domingo é chato. Para quem pode viajar e passear, o domingo é maravilhoso.",
    "Logo após os reclames do plim-plim!",
    "Olha só o que faz a maldita manguaça, bicho!",
    `${user} é bom tanto no pessoal quanto no profissional.`,
    `Essa fera ${user} aqui no domingão!`
 ]

 let mensagem = frases[Math.floor(Math.random() * frases.length)]

 message.channel.createWebhook(name, avatar).then(webhook => { 
 webhook.send(mensagem).then(() => webhook.delete())})
    }
}