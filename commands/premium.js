const Discord = require('discord.js')
const client = new Discord.Client()

const prefix = "*";
const token = require('../config.json');
client.login(token.token);

function emoji(id) {
    return client.emojis.get(id).toString();
}

client.on('message', message => {
    if (message.content === prefix + "premium") {
        let Embed = new Discord.RichEmbed()
            .setColor('#43b581')
            .setDescription("<:premium:761199702275522660> **About Premium**\n\nBy purchasing the premium, you benefit from the following categories such as: Protection, Music and others. <:rouages:761199703635263488>\nThe price set for the premium is `` 5€ ``\n\nPlease contact a STAFF member to purchase the premium! <:message:761199705409323018>")
            .setFooter("© Kio", "https://image.noelshack.com/fichiers/2020/38/6/1600514999-avatar.png");
        message.channel.send(Embed)
    }
});