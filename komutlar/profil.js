const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (bot, message, args) => {
  

  let user = message.mentions.members.first() || message.author;

  let money = await db.fetch(`para_${message.guild.id}_${user.id}`)
  if (money === null) money = 0;

  let bank = await db.fetch(`bank_${message.guild.id}_${user.id}`)
  if (bank === null) bank = 0;

  
  let newcar = await db.fetch(`araba_${message.guild.id}_${user.id}`)
  if(newcar === null) newcar = '0'

  let newhouse = await db.fetch(`ev_${message.guild.id}_${user.id}`)
  if(newhouse === null) newhouse = '0'

  let moneyEmbed = new Discord.RichEmbed()
  .setColor("#FFFFFF")
  .setDescription(`**${user} Profili**\n\nCepte: ${money}\nBankada: ${bank}\n\n**Envanter**\n\nArabası: ${newcar} tane var\nEvi: ${newhouse} tane var\n}`);
  message.channel.send(moneyEmbed)
 
};



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["pro"],
  permLevel: 0
};
exports.help = { name: "pro", description: "", usage: "" };
