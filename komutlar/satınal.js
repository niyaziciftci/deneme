const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
   
    let user = message.author;

    let author = db.fetch(`para_${message.guild.id}_${user.id}`)

    let Embed = new Discord.RichEmbed()
    .setColor("#FFFFFF")
    .setDescription(`Araba Almak için 35000 Liraya ihtiyacın var`);

    if (args[0] == 'araba') {
        if (author < 35000) return message.channel.send(Embed)
        
        db.fetch(`araba_${message.guild.id}_${user.id}`);
        db.set(`araba_${message.guild.id}_${user.id}`, true)

        let Embed2 = new Discord.RichEmbed()
        .setColor("#FFFFFF")
        .setDescription(`Araba 35000 Liraya Satın Alındı!`);

        db.subtract(`para_${message.guild.id}_${user.id}`, 35000)
        message.channel.send(Embed2)
    

       
    } else if(args[0] == 'ev') {
        let Embed2 = new Discord.RichEmbed()
        .setColor("#FFFFFF")
        .setDescription(`Ev almak için 120000 Liraya ihtiyacın var`);

        if (author < 12000) return message.channel.send(Embed2)
       
        db.fetch(`ev_${message.guild.id}_${user.id}`)
        db.add(`ev_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.RichEmbed()
        .setColor("#FFFFFF")
        .setDescription(`Ev 120000 liraya alındı`);

        db.subtract(`para_${message.guild.id}_${user.id}`, 120000)
        message.channel.send(Embed3)
    } else {
        let embed3 = new Discord.RichEmbed()
        .setColor("#FFFFFF")
        .setDescription('Alacağın eşyayı yaz')
        message.channel.send(embed3)
    }

}
  
  
exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ["al"],
  permLevel: 0 
};

exports.help = {
  name: 'al',
  description: '',
  usage: ''
};