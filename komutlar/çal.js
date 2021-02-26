const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports.run = async (bot, message, args) => {
  let user = message.author;

  let timeout = 180000;
  let amount = 500;

  let beg = await db.fetch(`beg_${message.guild.id}_${user.id}`);

  if (beg !== null && timeout - (Date.now() - beg) > 0) {
    let time = ms(timeout - (Date.now() - beg));
  
    let timeEmbed = new Discord.RichEmbed()
    .setColor("#FFFFFF")
    .setDescription(`:cross: Sen zaten soymuşsun\n\nBir daha çalmaya ${time.minutes}m ${time.seconds} kaldı `);
    message.channel.send(timeEmbed)
  } else {
    let paraEmbed = new Discord.RichEmbed()
  .setColor("#FFFFFF")
  .setDescription(` Soydun ve ${amount} para geldi`);
  message.channel.send(paraEmbed)
  db.add(`para_${message.guild.id}_${user.id}`, amount)
  db.set(`beg_${message.guild.id}_${user.id}`, Date.now())


  }
};
exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ["soy"],
  permLevel: 0 
};

exports.help = {
  name: 'soy',
  description: '',
  usage: ''
};