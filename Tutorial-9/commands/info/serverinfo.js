const { MessageEmbed } = require("discord.js");
const config = require("../../config.json");
const moment = require("moment");
const regions = {
    europe: "EUROPE",
    brazil: "BRAZIL",
    hongkong: "HONGKONG",
    germany: "GERMANY",
    russia: "RUSSIA",
    "US-CENTRAL": "US-CENTRAL",
}
module.exports = {
    name: "serverinfo",
    aliases: [""],
    category: "info",
    description: "Shows info of the current server",
    usage: "serverinfo",
    run: async (client, message, args) => {
        const emojis = message.guild.emojis.cache;
        const channels = message.guild.channels.cache;
        const members = message.guild.members.cache;
        const roles = message.guild.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString());

        const embed = new MessageEmbed()
        .setColor("#004422")
        .setTitle(message.guild.name + " Serverinformation")
        .setThumbnail(message.guild.iconURL({dynamic: true})) 
        .addField(`Server Owner`, `${message.guild.owner.user.tag}`,true)//NAME#1234
        .addField(`Region`, `${regions[message.guild.region]}`,true)
        .addField(`Time Created`, `${moment(message.guild.createdTimestamp).format("LT")} ${moment(message.guild.createdTimestamp).format("LL")} ${moment(message.guild.createdTimestamp).fromNow()}`,true)

        .addField(`Boost Tier`, `${message.guild.premiumTier ? `Tier: ${message.guild.premiumTier}` : "NO BOOSTS"}`,true)
        .addField(`Channel Count`, `${channels.size}`,true)
        .addField(`Text Channels:`, `${channels.filter(ch => ch.type === "text").size}`,true)
        
        .addField(`Voice Channels:`, `${channels.filter(ch => ch.type === "voice").size}`,true)
        .addField(`Member Count`, `${message.guild.memberCount}`,true)
        .addField(`Humans`, `${members.filter(me => !me.user.bot).size}`,true)
        
        .addField(`Bots`, `${members.filter(me => me.user.bot).size}`,true)
        .addField(`Regular Emojis`, `${emojis.filter(emoji=> !emoji.animated).size}`,true)
        .addField(`Animated Emojis`, `${emojis.filter(emoji=> emoji.animated).size}`,true)

        .addField(`${roles.length} ROLES`, `${roles.length < 6 ? roles.join(", ") : roles.length > 6 ? trimArray(roles) : "NONE"}`,true)
        .setFooter("SERVERID:  " + message.guild.id, message.guild.iconURL({dynamic: true}));

        message.channel.send(embed);
    }
}



function trimArray(arr, maxLength=10){
    if(arr.length > maxLength){
        const length = arr.length - maxLength;
        arr.push(`${length}, more...`)
    }
    return arr;
}