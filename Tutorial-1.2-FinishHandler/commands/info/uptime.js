module.exports = {
    name: "uptime",
	aliases: ["uptime"],
    category: "info",
    description: "Returns latency and API ping",
    run: async (client, message, args) => {
    

    function duration(ms) {
        const sec = Math.floor((ms / 1000) % 60).toString()
        const min = Math.floor((ms / (1000 * 60)) % 60).toString()
        const hrs = Math.floor((ms / (1000 * 60 * 60)) % 60).toString()
        const days = Math.floor((ms / (1000 * 60 * 60 * 24)) % 60).toString()
        return `${days.padStart(1, '0')} Days, ${hrs.padStart(2, '0')} Hours, ${min.padStart(2, '0')} Minutes, ${sec.padStart(2, '0')} Seconds, `
    }
    
    message.reply(`📈 **StripClub-Bot** is since ${duration(bot.uptime)} online.`);
    }
}
