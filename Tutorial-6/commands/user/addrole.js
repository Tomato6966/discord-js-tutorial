const { MessageEmbed } = require("discord.js");
module.exports = {
	name: "addrole",
	category: "user",
	aliases: ["addrole"],
  description: "Sends the Avatar of the User",
  run: async (client, message, args) => {
		let user = message.mentions.users.first();	
		if(!user) return message.reply("PLEASE PING A USER");
		if(user.id === message.author.id) return message.reply("U cannot add a Role to yourself");
		let member = message.guild.members.cache.get(user.id);
		let Role = message.mentions.roles.first();
		if(!Role) message.reply("PLEASE PING A ROLE")
		try{
			member.roles.add(Role)
			message.channel.send(`${user.tag} has got the Role: \`${Role.id}\``)
		}catch{
			message.channel.send(`Konnte ${user.tag} nicht die Rolle geben: \`${Role.id}\``)
		}
		
		
	}
}