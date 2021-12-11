const Discord = require('discord.js')
const client = new Discord.Client()

const prefix = "*";
const token = require('../config.json');
client.login(token.token);

function emoji(id) {
    return client.emojis.get(id).toString();
}

client.on('message', message => {
    if (message.content === prefix + 'support') {
        let Embed = new Discord.RichEmbed()
            .setColor('#43b581')
            .setDescription("[Click here!](https://discord.gg/mdZnYTx)")
            .setFooter("© Kio", "https://image.noelshack.com/fichiers/2020/38/6/1600514999-avatar.png");
        message.channel.send(Embed);
    }
});

client.on('message', message => {
    if (message.content === prefix + "help support") {
        let ping = Date.now() - message.createdTimestamp + " ms";
        let Embed = new Discord.RichEmbed()
            .setColor('#43b581')
            .setDescription("**The support command is used to send to the Kio Support link.** <:information:761199697381294090>\n\nUse: ``*support``!")
            .setFooter("© Kio", "https://image.noelshack.com/fichiers/2020/38/6/1600514999-avatar.png");
        message.channel.send(Embed)
    }
});