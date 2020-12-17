const Discord = require("discord.js");

const client = new Discord.Client();

const config = {
    prefix: "!",
    token: "Nzg5MDY0NDE4OTI2Mzk1NDEz.X9sngQ.bJwjn0SiOdee_0XD5v3WZObuhag"
}

client.on("ready", () => {
    console.log("Der Bot ist gestartet!")
})

client.on("message", (message) => {
    if(message.author.bot) return;
    if(!message.content.startsWith(config.prefix)) return;

    const args = message.content.slice(config.prefix.length).split(" ");
    const command = args.shift();    
    
        switch(command){
            case "ping":
                message.channel.send(`Mein Ping ist:  ${client.ws.ping}`);
              break;
            case "say":
                message.channel.send(args.join(" "));
              break;
            default:
                message.channel.send("UNKNOWN COMMAND");
              break;
        }
})

client.login(config.token);