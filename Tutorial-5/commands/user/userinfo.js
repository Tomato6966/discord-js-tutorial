const { MessageEmbed } = require("discord.js");
module.exports = {
	name: "userinfo",
	category: "user",
	aliases: ["uinfo"],
  description: "Sends the Information of the User",
  run: async (client, message, args) => {
		let user = message.mentions.users.first() || message.author;	
		let member = message.guild.members.cache.get(user.id);
		
		let embed = new MessageEmbed()
		.setColor("GREEN")
		.setAuthor("Userinformation über: " + user.tag, user.displayAvatarURL({dynamic: true}))
		.setThumbnail(user.displayAvatarURL({dynamic: true}))
		.setFooter(client.user.username, message.guild.iconURL())
		.addField("TAG:", `\`${user.tag}\`, ${user}`,true)
		.addField("ID:", `\`${user.id}\``,true)
		.addField("Is a BOT:", `\`${user.bot}\``,true)
		.addField("Joined Discord:", `\`${user.createdAt}\``,true)
		.addField("Presence:", `\`${user.presence.activities[0].state}\``,true)
		.addField("Status:", `\`${user.presence.status}\``,true)
		.addField("ROLLEN:", `<@&${member._roles.join("> | <@&")}>`,true)
		
		//.addField("ID:", `\`${user.id}\``,true)
		message.channel.send(embed)
	}
}