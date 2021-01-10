const { MessageEmbed } = require("discord.js");
module.exports = {
	name: "addrole",
	category: "user",
	aliases: ["addrole"],
  description: "Sends the Avatar of the User",
  run: async (client, message, args) => {
	//-1         0     1
	//!addrole @User ROLLE			
	let user = message.mentions.users.first();
	let member = message.guild.members.cache.get(user.id);
	if(!args[1]) return message.reply("Bitte füge eine ROllenamen hinzu")
	let role_from_txt = args.slice(1).join(" ").toLowerCase();
	let role = message.guild.roles.cache.find(role => role.name.toLowerCase() == role_from_txt) || message.guild.roles.cache.get(role_from_txt);
	if(!role) return message.reply("Role not found...")
	
	try{
	member.roles.add(role.id)
	return message.reply(`${user} now has the role: ${role.name}`)
	}catch (error) {
		console.log(error)
		return message.reply("something went wrong")
	}

	}
}