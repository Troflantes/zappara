const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Hayır dostum!");
  if(!args[0]) return message.channel.send("Lütfen bir numara belirtin.");
  message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`**Sohbette ${args[0]} mesaj silindi.**\n**__Not:__**\n**__Bu Mesaj 30 Saniye Sonra Kendini İmha 🔫 Edicektir.**`).then(msg => msg.delete(3000));
});

}

module.exports.help = {
  name: "sil"
}
