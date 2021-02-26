const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (bot, message, args, utils) => {
  
 

  let user = message.mentions.members.first() || message.author;

  let ampara= db.fetch(`para_${message.guild.id}_${user.id}`)

  if (ampara === null) ampara = 0;

  let bank = await db.fetch(`bank_${message.guild.id}_${user.id}`)
  if (bank === null) bank = 0;

  let paraEmbed = new Discord.RichEmbed()
  .setColor("#FFFFFF")

  .setDescription(`**${user}'nın Parası**\n\nCepte: ${ampara}\nBanka: ${bank}\n**Ekonomi Botu**`);
  //ewin
 message.channel.send(paraEmbed)
};
exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ["para","bakiye"],
  permLevel: 0 
};

exports.help = {
  name: 'para',
  description: '',
  usage: ''
};