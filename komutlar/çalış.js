const db = require('quick.db')
const Discord = require('discord.js')
const ms = require("parse-ms");

module.exports.run = async (bot, message, args) => {
   

    let user = message.author;
    let author = await db.fetch(`iss_${message.guild.id}_${user.id}`)

    let timeout = 600000;
    
    if (author !== null && timeout - (Date.now() - author) > 0) {
        let time = ms(timeout - (Date.now() - author));
    
        let timeEmbed = new Discord.RichEmbed()
        .setColor("#FFFFFF")
        .setDescription(`Yakın zaman içinde çalıştın\n\n ${time.minutes}m ${time.seconds}sonra tekrar gel `);
        message.channel.send(timeEmbed)
      } else {

        let sonucc = ['Programcı','İşçi','Garson','Şöför','Aşçı','Mühendis']

        let sss = Math.floor((Math.random() * sonucc.length));
        let mik = Math.floor(Math.random() * 80) + 1;
        let embed1 = new Discord.RichEmbed()
        .setColor("#FFFFFF")
        .setDescription(` ${sonucc[sss]} Olarak çalıştın ve  ${mik} para kazandın`);
        message.channel.send(embed1)
        
        db.add(`para_${message.guild.id}_${user.id}`, mik)
        db.set(`iss_${message.guild.id}_${user.id}`, Date.now())
    };
}




exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ["çalış"],
  permLevel: 0 
};

exports.help = {
  name: 'çalış',
  description: '',
  usage: ''
};