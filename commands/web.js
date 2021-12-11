const Discord = require('discord.js')
const client = new Discord.Client()

const prefix = "*";
const token = require('../config.json');
client.login(token.token);

function emoji(id) {
    return client.emojis.get(id).toString();
}

client.on('message', message => {
    if (message.content === prefix + 'web') {
        let Embed = new Discord.RichEmbed()
            .setColor('#43b581')
            .setDescription("[Click here!](https://kio.fr) ``MAINTENANCE!``")
            .setFooter("© Kio", "https://image.noelshack.com/fichiers/2020/38/6/1600514999-avatar.png");
        message.channel.send(Embed);
    }
});

client.on('message', message => {
    if (message.content === prefix + "help web") {
        let ping = Date.now() - message.createdTimestamp + " ms";
        let Embed = new Discord.RichEmbed()
            .setColor('#43b581')
            .setDescription("**The web command is used to display the Kio site.** <:information:761199697381294090>\n\nUse: ``*web``!")
            .setFooter("© Kio", "https://image.noelshack.com/fichiers/2020/38/6/1600514999-avatar.png");
        message.channel.send(Embed)
    }
});