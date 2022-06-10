const { MessageEmbed } = require("discord.js");

function nicelink(msg, args) {
  const embedMessage = new MessageEmbed();
  msg.delete();
  // console.log(msg.author)
  embedMessage.setDescription(`**[${args[0]}](${args[1]})**`).setColor(0xffffff);

  msg.channel.send({ embeds: [embedMessage] });
}

module.exports = nicelink;
