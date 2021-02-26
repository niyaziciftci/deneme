const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports.run = async (bot, message, args) => {
  
let user = message.mentions.members.first()
let targetuser = await db.fetch(`para_${message.guild.id}_${user.id}`)
let author = await db.fetch(`rob_${message.guild.id}_${user.id}`)
let author2 = await db.fetch(`para_${message.guild.id}_${user.id}`)

let timeout = 600000;

if (author !== null && timeout - (Date.now() - author) > 0) {
    let time = ms(timeout - (Date.now() - author));
if (message.mentions.users.first().bot) return message.reply(`Botları Soyamazsın`);
    let timeEmbed = new Discord.RichEmbed()
    .setColor("#FFFFFF")
    .setDescription(`Zaten soymuşsun \n\n ${time.minutes}m ${time.seconds} içinde tekrar dene`);
    message.channel.send(timeEmbed)
  } else {

let moneyEmbed = new Discord.RichEmbed()
  .setColor("#FFFFFF")
  .setDescription(`Soyabilceğin kişinin en az cebinde 200 lirası olması gerek`);

if (author2 < 200) {
    return message.channel.send(moneyEmbed)

}
let moneyEmbed2 = new Discord.RichEmbed()
  .setColor("#FFFFFF")
  .setDescription(`${user.user.username} soyabilceğin birşeyi yok`);
if (targetuser < 0) {
    return message.channel.send(moneyEmbed2)
}




 let random = Math.floor(Math.random() * 200) + 1;


let embed = new Discord.RichEmbed()
.setDescription(` ${user} adlı kişiyi soydun ve ${random} para kazandın`)
.setColor("#FFFFFF")
message.channel.send(embed)

db.subtract(`para_${message.guild.id}_${user.id}`, random)
db.add(`para_${message.guild.id}_${user.id}`, random)
db.set(`rob_${message.guild.id}_${user.id}`, Date.now())
  
};
}


exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ["çal"],
  permLevel: 0 
};

exports.help = {
  name: 'çal',
  description: '',
  usage: ''
};