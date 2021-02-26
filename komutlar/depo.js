const Discord = require("discord.js");
const ms = require("parse-ms");
const db = require("quick.db");

module.exports.run = async (bot, message, args) => {
  let user = message.author;

  let member = db.fetch(`para_${message.guild.id}_${user.id}`);
  let member2 = db.fetch(`bank_${message.guild.id}_${user.id}`);

  if (args[0] == "hepsi") {
    let paray = await db.fetch(`para_${message.guild.id}_${user.id}`);
    let bank = await db.fetch(`bank_${message.guild.id}_${user.id}`);

    let embedbank = new Discord.RichEmbed()
      .setColor("#FFFFFF")
      .setDescription("Okadar paran yok!");

    if (paray === 0) return message.channel.send(embedbank);

    db.add(`bank_${message.guild.id}_${user.id}`, paray);
    db.subtract(`para_${message.guild.id}_${user.id}`, paray);
    let embed5 = new Discord.RichEmbed()
      .setColor("#FFFFFF")
      .setDescription(`Paranı bankaya koydun!`);
    message.channel.send(embed5);
  } else {
    let embed2 = new Discord.RichEmbed()
      .setColor("#FFFFFF")
      .setDescription(`Lütfen bir sayı yaz`);

    if (!args[0]) {
      return message.channel.send(embed2).catch(err => console.log(err));
    }
    let embed3 = new Discord.RichEmbed()
      .setColor("#FFFFFF")
      .setDescription(`Negatif sayı yazamazsın`);

    if (message.content.includes("-")) {
      return message.channel.send(embed3);
    }
    let embed4 = new Discord.RichEmbed()
      .setColor("#FFFFFF")
      .setDescription(`Okadar paran yok`);

    if (member < args[0]) {
      return message.channel.send(embed4);
    }

    let embed5 = new Discord.RichEmbed()
      .setColor("#FFFFFF")
      .setDescription(`Bankaya  ${args[0]} para yatırdın`);

    message.channel.send(embed5);
    db.add(`bank_${message.guild.id}_${user.id}`, args[0]);
    db.subtract(`para_${message.guild.id}_${user.id}`, args[0]);
  }
};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["depo"],
  permLevel: 0
};

exports.help = {
  name: "banka",
  description: "",
  usage: ""
};
