const { MessageEmbed } = require("discord.js");
module.exports = {
	name: "ban",
	category: "user",
	aliases: ["ban"],
  description: "Bans a Member",
  run: async (client, message, args) => {
		let user = message.mentions.users.first();	
		if(!user) return message.reply("PLEASE PING A USER");
		if(user.id === message.author.id) return message.reply("U cannot ban yourself");
		let member = message.guild.members.cache.get(user.id);
		if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("DU BIST KEIN ADMIN! nutze diesen cmd nicht!")
			if(!member.bannable)  return message.channel.send("Konnte den User nicht bannen!");
		try{
				member.ban();
				message.channel.send("SUCCESSFULLY, banned: " + user.tag)
			}catch{
				message.channel.send("Konnte den User nicht bannen!")
			}
	}
}
