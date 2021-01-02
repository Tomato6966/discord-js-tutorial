const { MessageEmbed } = require("discord.js");
module.exports = {
	name: "kick",
	category: "user",
	aliases: ["kick"],
  description: "Kicks a member",
  run: async (client, message, args) => {
		let user = message.mentions.users.first();	
		if(!user) return message.reply("PLEASE PING A USER");
		if(user.id === message.author.id) return message.reply("U cannot kick yourself");
		let member = message.guild.members.cache.get(user.id);
		if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("DU BIST KEIN ADMIN! nutze diesen cmd nicht!")
		if(!member.kickable)  return message.channel.send("Konnte den User nicht kicken!");	
		try{
				member.kick();
				message.channel.send("SUCCESSFULLY, kicked: " + user.tag)
			}catch{
				message.channel.send("Konnte den User nicht kicken!")
			}
	}
}
