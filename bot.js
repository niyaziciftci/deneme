const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
client.queue = new Map()
const chalk = require('chalk');
const fs = require('fs');
const Jimp = require('jimp');
const db = require('quick.db');
const Canvas = require('canvas')
const ms = require('parse-ms')
const moment = require('moment');
require('./util/eventLoader')(client);

///////////
const https = require('https');
const path = require('path');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  const app = express();
setInterval(() => {
  https.get(`showdan link yazılacak`)
}, 15000);

app.get("/", (request, response) => {
  response.sendStatus(200);
});











 response.sendStatus(200)
  //response.sendFile(path.join(__dirname+'/index.html'))
});
app.listen(process.env.PORT);
setInterval(() => {
  https.get(`proje linki`);
}, 28000);
///////////

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};




let Constants = require('discord.js/src/util/Constants.js')
Constants.DefaultOptions.ws.properties.$browser = 'Discord Android'
//botu telefonda gösterme


///////////

var prefix = ayarlar.prefix;


client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yükleniyor`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});


client.on('message', message => {
let para = db.fetch(`para_${message.author.id}`)

if(para) return

  if(!para) {
  
    return 
  } 
});


////////////////////.on('message', msg => {
client.on('message', msg => {
if (!msg.content.startsWith(prefix)) {
    return;
  }

  });


client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

let token = ayarlar.token
  client.login(token)
  .then(function() {
    console.log('Token çok iyi çalışıyor')
  }, function(err) {
    console.log("Tokende hata oldu: " + err)
        setInterval(function() {
       process.exit(0)
        }, 20000);
   client.on('message', async message => {
  
  

})


        })
