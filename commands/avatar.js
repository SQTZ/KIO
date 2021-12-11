const Discord = require('discord.js');
const client = new Discord.Client()

const prefix = "*";
const token = require('../config.json');

function emoji(id) {
    return client.emojis.get(id).toString();
}

client.on('message', message => {
    if (message.content.startsWith(prefix + "avatar")) {
        const user = message.mentions.users.first() || message.author;

        let Embed = new Discord.MessageEmbed()
            .setColor('#43b581')
            .setDescription('Here is his avatar <:information:761199697381294090>')
            .setImage(user.avatarURL)
            .setFooter("© Kio", "https://image.noelshack.com/fichiers/2020/38/6/1600514999-avatar.png");
        channel.send(Embed)
    }

});

client.on('message', message => {
    if (message.content === prefix + "help avatar") {
        let ping = Date.now() - message.createdTimestamp + " ms";
        let Embed = new Discord.MessageEmbed()
            .setColor('#43b581')
            .setDescription("**The avatar command is used to display the user icon.** <:information:761199697381294090>\n\nUse: ``*avatar <@user>``!")
            .setFooter("© Kio", "https://image.noelshack.com/fichiers/2020/38/6/1600514999-avatar.png");
        channel.send(Embed)
    }
});