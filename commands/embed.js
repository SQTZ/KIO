const Discord = require('discord.js')
const client = new Discord.Client()
const { get } = require("snekfetch");

const prefix = "*";
const token = require('../config.json');
client.login(token.token);

function emoji(id) {
    return client.emojis.get(id).toString();
}

client.on('message', message => {
    if (message.content.startsWith(prefix + "embed")) {
        let args = message.content.split(" ").slice(1);
        if (!args[0]) return message.channel.send("Error Code 100: please write a message! <:error:761199675680227329>");;

        const cmd = args.join(' ').split(' | ')

        let emb = new Discord.RichEmbed()
            .setTitle(cmd[0])
            .setColor('#43b581')
            .setFooter("© Kio", "https://image.noelshack.com/fichiers/2020/38/6/1600514999-avatar.png");

        message.channel.send(emb)

        message.delete();
    }
});

client.on('message', message => {
    if (message.content === prefix + "help embed") {
        let ping = Date.now() - message.createdTimestamp + " ms";
        let Embed = new Discord.RichEmbed()
            .setColor('#43b581')
            .setDescription("**The embed command is used to write your message in an embed.** <:information:761199697381294090>\n\nUse: ``*embed <message>``!")
            .setFooter("© Kio", "https://image.noelshack.com/fichiers/2020/38/6/1600514999-avatar.png");
        message.channel.send(Embed)
    }
});