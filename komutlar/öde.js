const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports.run = async (bot, message, args) => {

  let user = message.mentions.members.first() 

  let member = db.fetch(`para_${message.guild.id}_${message.author.id}`)

  let embed1 = new Discord.RichEmbed()
  .setColor("#FFFFFF")
  .setDescription(` Ödeyeceğin kişiyi etiketle`);

  if (!user) {
      return message.channel.send(embed1)
  }
  let embed2 = new Discord.RichEmbed()
  .setColor("#FFFFFF")
  .setDescription(` Ödeyeceğin Parayı yaz`);
  
  if (!args[1]) {
      return message.channel.send(embed2)
  }
  let embed3 = new Discord.RichEmbed()
  .setColor("#FFFFFF")
  .setDescription(` Negatif sayılı para atamazsın`);

  if (message.content.includes('-')) { 
      return message.channel.send(embed3)
  }
  let embed4 = new Discord.RichEmbed()
  .setColor("#FFFFFF")
  .setDescription(`Okadar paran yok`);

  if (member < args[1]) {
      return message.channel.send(embed4)
  }

  let embed5 = new Discord.RichEmbed()
  .setColor("#FFFFFF")
  .setDescription(` ${user.user.username} isimli kişiye  ${args[1]} para ödendi`);

  message.channel.send(embed5)
  db.add(`para_${message.guild.id}_${user.id}`, args[1])
  db.subtract(`para_${message.guild.id}_${message.author.id}`, args[1])

}


exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ["öde"],
  permLevel: 0 
};

exports.help = {
  name: 'öde',
  description: '',
  usage: ''
};