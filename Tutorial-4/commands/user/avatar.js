const { MessageEmbed } = require("discord.js");
module.exports = {
	name: "avatar",
	category: "user",
	aliases: [""],
  description: "Sends the Avatar of the User",
  run: async (client, message, args) => {
		let user = message.mentions.users.first() || message.author;	
	let avatar = user.displayAvatarURL({dynamic: true});
	//message.channel.send(avatar);
	let embed = new MessageEmbed()
	.setColor("RANDOM")
	.setTitle(`${user.tag}'s Avatar`)
	.setURL(avatar)
	.setFooter(client.user.username, message.guild.iconURL())
	.setImage(avatar)
	message.channel.send(embed)
	}
}