const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports.run = async (bot, message, args) => {
  
  let user = message.author;

  let member = db.fetch(`para_${message.guild.id}_${user.id}`)
  let member2 = db.fetch(`bank_${message.guild.id}_${user.id}`)

  if (args[0] == 'hepsi') {
    let money = await db.fetch(`bank_${message.guild.id}_${user.id}`)
    
    db.subtract(`bank_${message.guild.id}_${user.id}`, money)
    db.add(`para_${message.guild.id}_${user.id}`, money)
    let embed5 = new Discord.RichEmbed()
  .setColor("#FFFFFF")
  .setDescription(`Bankadan bütün paranı aldın`);
  message.channel.send(embed5)
  
  } else {

  let embed2 = new Discord.RichEmbed()
  .setColor("#FFFFFF")
  .setDescription(`Çekeceğin parayı yaz`);
  
  if (!args[0]) {
      return message.channel.send(embed2)
  }
  let embed3 = new Discord.RichEmbed()
  .setColor("#FFFFFF")
  .setDescription(`Negatif sayı yazamazsın`);

  if (message.content.includes('-')) { 
      return message.channel.send(embed3)
  }
  let embed4 = new Discord.RichEmbed()
  .setColor("#FFFFFF")
  .setDescription(`Okadar paran yok`);

  if (member2 < args[0]) {
      return message.channel.send(embed4)
  }

  let embed5 = new Discord.RichEmbed()
  .setColor("#FFFFFF")
  .setDescription(` ${args[0]} para bankadan çektin`);

  message.channel.send(embed5)
  db.subtract(`bank_${message.guild.id}_${user.id}`, args[0])
  db.add(`para_${message.guild.id}_${user.id}`, args[0])
  }
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ["çek"],
  permLevel: 0 
};

exports.help = {
  name: 'çek',
  description: '',
  usage: ''
};