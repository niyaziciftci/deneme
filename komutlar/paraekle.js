const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (bot, message, args) => {

  let balak = args.slice(1).join(" ")
  let user = message.mentions.members.first();
  if (!user) return message.channel.send("Bir kullanıcı etiketlemelisin.");
  db.add(`para_${message.guild.id}_${user.id}`, balak)
    let balakk = db.fetch(`para_${message.guild.id}_${user.id}`)
  let moneyEmbed = new Discord.RichEmbed()
    .setColor("#FFFFFF")
    .setDescription(
      ` ${balak} Para eklendi \n\nYeni para: ${balakk}`
      
    );
  message.channel.send(moneyEmbed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["paraekle"],
  permLevel: 0
};
exports.help = { name: "paraekle", description: "", usage: "" };
