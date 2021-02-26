const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports.run = async (bot, message, args) => {
 
  let user = message.author;

  let zaman = 86400000;
  let miktar = 200;

  let gunluk = await db.fetch(`gunluk_${message.guild.id}_${user.id}`);

  if (gunluk !== null && zaman - (Date.now() - gunluk) > 0) {
    let time = ms(zaman - (Date.now() - gunluk));
  
    let timeEmbed = new Discord.RichEmbed()
    .setColor("#FFFFFF")
    .setDescription(`${time.hours}h ${time.minutes}m ${time.seconds} içinde tekrar dene`);
    message.channel.send(timeEmbed)
  } else {
    let paraEmbed = new Discord.RichEmbed()
  .setColor("#FFFFFF")
  .setDescription(` ${miktar} kadar para aldın`);
  message.channel.send(paraEmbed)
  db.add(`para_${message.guild.id}_${user.id}`, miktar)
  db.set(`gunluk_${message.guild.id}_${user.id}`, Date.now())


  }
};


exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ["günlük"],
  permLevel: 0 
};

exports.help = {
  name: 'günlük',
  description: '',
  usage: ''
};