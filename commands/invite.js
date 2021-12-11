const Discord = require('discord.js')
const client = new Discord.Client()

const prefix = "*";
const token = require('../config.json');
client.login(token.token);

function emoji(id) {
    return client.emojis.get(id).toString();
}

client.on('message', message => {
    if (message.content === prefix + 'invite') {
        let Embed = new Discord.RichEmbed()
            .setColor('#43b581')
            .setDescription("[Click here!](https://discordapp.com/oauth2/authorize?client_id=663397729967407105&scope=bot&permissions=8)")
            .setFooter("© Kio", "https://image.noelshack.com/fichiers/2020/38/6/1600514999-avatar.png");
        message.channel.send(Embed);
    }
});

client.on('message', message => {
    if (message.content === prefix + "help invite") {
        let ping = Date.now() - message.createdTimestamp + " ms";
        let Embed = new Discord.RichEmbed()
            .setColor('#43b581')
            .setDescription("**The invite command is used to send an invitation to add Kio to the user.** <:information:761199697381294090>\n\nUse: ``*invite``!")
            .setFooter("© Kio", "https://image.noelshack.com/fichiers/2020/38/6/1600514999-avatar.png");
        message.channel.send(Embed)
    }
});