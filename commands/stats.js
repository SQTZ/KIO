const Discord = require('discord.js')
const client = new Discord.Client()
const moment = require("moment");
require("moment-duration-format");

const prefix = "*";
const token = require('../config.json');
client.login(token.token);

function emoji(id) {
    return client.emojis.get(id).toString();
}

client.on('message', message => {
    if (message.content === prefix + "stats") {
        let Embed = new Discord.RichEmbed()
            .setColor('#43b581')
            .addField("<:message:761199705409323018> Statistics", `\n\n[Servers:](https://kio.fr)  ${client.guilds.size.toLocaleString()}\n[Members:](https://kio.fr)  ${client.users.size.toLocaleString()}\n[Lounges:](https://kio.fr)  ${client.channels.size.toLocaleString()}\n[Commands:](https://kio.fr)  24\n[Ping:](https://kio.fr)  ${Date.now() - message.createdTimestamp} MS`, true)
            .addField("<:information:761199697381294090> Versions", `\n\n[Kio:](https://kio.fr)  v1.0.4\n[Discord.js:](https://kio.fr)  v11.5.1\n[Node.js:](https://kio.fr) v10.16.3`, true)
            .addField("<:rouages:761199703635263488> System", `\n\n[Platform:](https://kio.fr)  Linux\n[Configuration:](https://kio.fr)  Xeon® E5\n[Memory used:](https://kio.fr) ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB\n[API:](https://kio.fr)  ${Date.now() - message.createdTimestamp} MS\n[Arch:](https://kio.fr)  x64`, true)
            .addField("Connections", "\n\n[Support!](https://discord.gg/mdZnYTx) - [Invite me!](https://discordapp.com/oauth2/authorize?client_id=663397729967407105&scope=bot&permissions=8) - [Web!](https://kio.fr)")
            .setFooter("© Kio", "https://image.noelshack.com/fichiers/2020/38/6/1600514999-avatar.png");
        message.channel.send(Embed)
    }
});

client.on('message', message => {
    if (message.content === prefix + "help stats") {
        let ping = Date.now() - message.createdTimestamp + " ms";
        let Embed = new Discord.RichEmbed()
            .setColor('#43b581')
            .setDescription("**The stats command is used to display Kio statistics.** <:information:761199697381294090>\n\nUse: ``*stats``!")
            .setFooter("© Kio", "https://image.noelshack.com/fichiers/2020/38/6/1600514999-avatar.png");
        message.channel.send(Embed)
    }
});