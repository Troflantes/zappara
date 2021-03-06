const Discord = require("discord.js");
const client = new Discord.Client();

//PREFIX
var prefix = 's/';

//TOKEN
client.login(process.env.BOT_TOKEN);

//DOSYALARI KOMUT OLARAK ALGILAMASI ICIN
client.on("message", async msg => {
  if (msg.author.bot) return;
  if(msg.content.indexOf(prefix) !== 0) return;

  const args = msg.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  const event = msg.content.toLower

  try {
    let commandFile = require(`./ozellikler/${command}.js`);
    commandFile.run(client, msg, args);
  } catch (err) {}
});

// BOT AÇILINCA
client.on('ready', () => {
  console.log('Giris Saglandi');
  console.log("Prefix: " + prefix);
  console.log("Bot ID'si: " + client.user.id);
  console.log("Bot Isim: " + client.user.username);
});

// OYNUYOR g
client.on('ready', () => {
  client.user.setStatus("STREAMING");
});
//EKLİ OLDUĞU SUNUCU SAYISI - OYNUYOR İLE
client.on("guildCreate", guild => {
  client.user.setStatus("STREAMING"); 
});
client.on("guildDelete", guild => {
  client.user.setStatus("STREAMING"); 
});
	client.on('ready', () => {
	console.log("Giris Saglandi...");
 	client.user.setStatus("STREAMING"); 
	setTimeout(function(){
	console.log("Bot hizmete acilmistir.");
	}, 1000);
	function botStatus() {
        let status = [
            `Prefix : ${prefix}.`,
            `Teşekkürler : ${client.guilds.size} sunucu`,
            `Ramazan Ayınız Mübarek Olsun.`,
            `Geliştirici: Enes Onur Ata#9427`,
            `Teşekkürler : ${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} kullanıcı.`
        ];
        let rstatus = Math.floor(Math.random() * status.length);
		
	client.user.setActivity(status[rstatus], {Type: 'STREAMING'});        // BOT STATUS
      }; setInterval(botStatus, 20000)
        setInterval(() => {
        dbl.postStats(client.guilds.size)
        }, 1800000);
	})

client.on('guildCreate', guild => {
    let channel = bot.channels.get("450419544519999509")
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor(`Giriş ${guild.name}`)
        .setThumbnail(guild.iconURL)
        .addField("Kurucu", guild.owner)
        .addField("Sunucu ID", guild.id, true)
        .addField("Toplam Kullanıcı", guild.memberCount, true)
        .addField("Toplam Kanal", guild.channels.size, true)
         channel.send(embed);
    });
client.on('guildDelete', guild => {
    let channel = client.channels.get("450419544519999509")
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor(`Çıkış ${guild.name}`)
        .setThumbnail(guild.iconURL)
        .addField("Kurucu", guild.owner)
        .addField("Sunucu ID", guild.id, true)
        .addField("Toplam Kullanıcı", guild.memberCount, true)
        .addField("Toplam Kanal", guild.channels.size, true)
         channel.send(embed);
    });
//SUNUCUBILGI
client.on("message", message => {
    if (message.content.toLowerCase() === prefix + "sunucubilgi") {
        const embed = new Discord.RichEmbed()
    .setTimestamp()
    .setAuthor(message.guild.name, message.guild.iconURL)
    .addField('Sunucu Adı:', message.guild.name)
    .addField('Sunucu ID:', message.guild.id)
    .addField('Ana kanal:', message.guild.defaultChannel)
    .addField('Sunucu Bölgesi:', message.guild.region)
    .addField('Üye sayısı:', message.guild.memberCount)
    .addField('Sahibi:', message.guild.owner + ' (' + message.guild.ownerID + ')')
    .addField('Kanal sayısı:', message.guild.channels.size)
    .addField('Oluşturulma tarihi:', message.guild.createdAt)
            .setColor("RANDOM")

        return message.channel.sendEmbed(embed)
    }
});
//SELAM
client.on('message', async msg => {
  if (msg.content.toLowerCase() === 'sa') {
    await msg.react('🇦');
    msg.react('🇸');
  }
});
  
// Otomatik Mesajlar
client.on('message', msg => {
  if (msg.content === 'Zappara') {
   	msg.reply('Yardıma mı ihtiyacın var? \nz!yardım');
  }
});
client.on('message', msg => {
  if (msg.content === 'zappara') {
   	msg.reply('Yardıma mı ihtiyacın var? \nz!yardım');
  }
});
  
// SUNUCUYA GİRİŞ
client.on('guildMemberAdd', member => {
  let guild = member.guild;
  let joinRole = guild.roles.find('name', 'Üye');
  member.addRole(joinRole);

  const channel = member.guild.channels.find('name', 'z_uyelog');
  if (!channel) return;
  const embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setAuthor(member.user.username, member.user.avatarURL)
  .setThumbnail(member.user.avatarURL)
  .setTitle('📥 | Sunucuya katıldı')
  .setTimestamp()
  channel.sendEmbed(embed);
});
// SUNUCUYA ÇIKIŞ
client.on('guildMemberRemove', member => {
  const channel = member.guild.channels.find('name', 'z_uyelog');
  if (!channel) return;
  const embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setAuthor(member.user.username, member.user.avatarURL)
  .setThumbnail(member.user.avatarURL)
  .setTitle('📤 | Sunucudan Ayrıldı')
  .setTimestamp()
  channel.sendEmbed(embed); 
});

// Özelden Yazılanlar
    client.on("message", message => {
    const dmchannel = client.channels.find("name", "zappara_dm");
    if (message.channel.type === "dm") {
        if (message.author.id === client.user.id) return;
        dmchannel.sendMessage("", {embed: {
                color: 3447003,
                title: `Zappara'ya özelden yazdı: ${message.author.tag}`,
                description: `${message.content}`
              }})
    }
    if (message.channel.bot) return;
});

//MINECRAFT MOB
client.on("message", msg => {
  if (msg.content === prefix + 'mcyaratık') {
const embed = new Discord.RichEmbed()
  .setTitle("Minecraft Yaratıkları")
  .setAuthor("Zappara", "https://cdn.discordapp.com/attachments/440820385643233290/449932544700579842/images_1.png")
  .setColor(0x00AE86)
  .setFooter("Zappara | Minecraft Yaratıkları", "https://cdn.discordapp.com/attachments/440820385643233290/449932544700579842/images_1.png")
  .setImage("https://cdn.discordapp.com/attachments/440820289312522261/445144265333538817/giphy.gif")
  .setTimestamp()
  /*.setURL("http://enesonurata.cf")*/
  msg.channel.send({embed})
  }});
//Türkiye Bayrağı
client.on("message", msg => {
  if (msg.content === prefix + 'tr') {
const embed = new Discord.RichEmbed()
  .setTitle("Türkiye Bayrağı")
  .setAuthor("Zappara", "https://cdn.discordapp.com/attachments/440820385643233290/449932544700579842/images_1.png")
  .setColor(0x00AE86)
  .setFooter("Zappara | Türkiye Bayrağı", "https://cdn.discordapp.com/attachments/440820385643233290/449932544700579842/images_1.png")
  .setImage("http://gifgalaksi.com/upload/tbb_1.gif")
  .setTimestamp()
  .setURL("http://enesonurata.cf")
  msg.channel.send({embed})
  }});

client.on('message', msg => {
  if (msg.content === prefix + 'yayınyap') {
   	client.user.setStatus("STREAMING");
  }
});
