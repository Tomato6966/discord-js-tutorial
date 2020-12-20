const {MessageEmbed} =require("discord.js")
module.exports = {
	name: "embed",
	category: "fun",
	aliases: [""],
  description: "Resends the message",
  run: async (client, message, args) => {
	/*	
	const embed = new MessageEmbed()
	.setColor("#009933")
	.setTitle("TEST TITEL")
	.setImage("https://i.ytimg.com/vi/-ObdvMkCKws/maxresdefault.jpg")
	.setAuthor("AUTHOR LINE", "https://i.ytimg.com/vi/-ObdvMkCKws/maxresdefault.jpg" , "https://i.ytimg.com/vi/-ObdvMkCKws/maxresdefault.jpg")
	.setFooter("FOOTER LINE", "https://i.ytimg.com/vi/-ObdvMkCKws/maxresdefault.jpg")
	.setThumbnail("https://images-ext-2.discordapp.net/external/-3q8I8_FlXEgEXI3IBN42Qws-ddM3h9_KQ9ZnJ0uEYU/https/cdn.discordapp.com/avatars/789845410998779904/63f53def498998225feffe0ddded5428.webp")
	.setDescription(`Beschreibung

	<@442355791412854784>
	> Das ist ein markstrich
	
	**FETTER TEXT**
	ss`)	
	.setTimestamp()
	.addField("FELD TITEL",`asdasdasdA
	SDA
	SDASDA
	SD`)
	.addField("FELD TITEL",`asdasdasdA
	SDA
	SDASDA
	SD`)
	.addField("\u200b",`\u200b`)
	.addField("FELD TITEL",`asdasdasdA
	SDA
	SDASDA
	SD`)
	.addField("FELD TITEL",`asdasdasdA
	SDA
	SDASDA
	SD`)
	.addField("\u200b",`\u200b`)*/

	const argsneu = message.content.slice(6).split("%&")

	const TITEL = argsneu[0];
	const BESCHREIBUNG = argsneu[1];

	const embed = new MessageEmbed()
	.setColor("RED")
	.setFooter("FOOTER LINE", "https://i.ytimg.com/vi/-ObdvMkCKws/maxresdefault.jpg")
	.setTimestamp()
	.setTitle(TITEL)
	.setDescription(BESCHREIBUNG)

	message.channel.send(embed)

}
}