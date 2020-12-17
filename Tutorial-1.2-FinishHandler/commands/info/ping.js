module.exports = {
    name: "ping",
	aliases: ["latency"],
    category: "info",
    description: "Returns latency and API ping",
    run: async (client, message, args) => {
        const msg = await message.channel.send(`🏓 Pinging....`);
        msg.edit(`🏓 Pong!
        API Latency is ${Math.round(client.ws.ping)}ms`);
    }
}
