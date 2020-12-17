const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const utils = require('../../utils');
const config = require('../../config.json');
module.exports = {
    name: "help",
    aliases: ["h"],
    category: "info",
    description: "Returns all commands, or one specific command info",
    usage: "[command, alias]",
    run: async (client, message, args) => {
   
       if (args[0]) {
            return getCMD(client, message, args[0]);
        } else {
            return getAll(client, message);
        }
    }
}

function getAll(client, message) {
    const embed = new MessageEmbed()
        .setColor("#FFDFD3")
        .setThumbnail("https://cdn.discordapp.com/icons/759741472245022760/a_896fbb53fccda19a8f1a7b7fe93d9a1e.gif")
        .setTitle('Help Menu')
            .addField("**__BOT BY:__**", `
            >>> <@442355791412854784> \`Tomato#6966\` [\`Website\`](https://musicium.eu)
            `)
        .setFooter(`To see command descriptions and usage type   ${config.prefix}help [CMD Name]`, client.user.displayAvatarURL())
    const commands = (category) => {
        return client.commands
            .filter(cmd => cmd.category === category)
            .map(cmd => `\`${cmd.name}\``)
            .join(", ");
    }
    const info = client.categories
        .map(cat => stripIndents`**__${cat[0].toUpperCase() + cat.slice(1)}__** \n> ${commands(cat)}`)
        .reduce((string, category) => string + "\n" + category);
    return message.channel.send(embed.setDescription(info));
}

function getCMD(client, message, input) {
    const embed = new MessageEmbed()
    const cmd = client.commands.get(input.toLowerCase()) || client.commands.get(client.aliases.get(input.toLowerCase()));
    let info = `No information found for command **${input.toLowerCase()}**`;
    if (!cmd) {
        return message.channel.send(embed.setColor("RED").setDescription(info));
    }
    if (cmd.name) info = `**Command name**: ${cmd.name}`;
    if (cmd.aliases) info += `\n**Aliases**: ${cmd.aliases.map(a => `\`${a}\``).join(", ")}`;
    if (cmd.description) info += `\n**Description**: ${cmd.description}`;
    if (cmd.usage) {
        info += `\n**Usage**: ${cmd.usage}`;
        embed.setFooter(`Syntax: <> = required, [] = optional`);
    }
    return message.channel.send(embed.setColor("GREEN").setDescription(info));
}