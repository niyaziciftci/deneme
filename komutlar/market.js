const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
   


    let embed = new Discord.RichEmbed()
    .setDescription("**Market**\n\nAraba: 35000 Lira [!al araba]\n\n**Emlak**\nEv: 120000 [!al ev]")
    .setColor("#FFFFFF")
    message.channel.send(embed)




};
exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ["market"],
  permLevel: 0 
};

exports.help = {
  name: 'market',
  description: '',
  usage: ''
};