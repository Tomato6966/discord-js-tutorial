module.exports = {
	name: "say",
	category: "fun",
  description: "Resends the message",
  run: async (client, message, args) => {
	message.channel.send(args.join(" "))
	}
}
