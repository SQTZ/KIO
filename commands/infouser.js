const Discord = require('discord.js')
const client = new Discord.Client()

const prefix = "*";
const token = require('../config.json');
client.login(token.token);
const moment = require('moment');

function emoji(id) {
    return client.emojis.get(id).toString();
}

client.on('message', function(message) {
    if (message.content.startsWith(prefix + 'iuser')) {
        if (!message.guild.member(message.author).hasPermission("MANAGE_GUILD")) return message.channel.send("Code Error 403: You do not have the `MANAGE_GUILD` permission to execute this command! <:error:761199675680227329>").catch(console.error);
        let user = message.mentions.users.first() || message.author;
        const embed = new Discord.RichEmbed()
            .setFooter("© Kio", "https://image.noelshack.com/fichiers/2020/38/6/1600514999-avatar.png")
            .setColor("#43b581")
            .setThumbnail(user.avatarURL)
            .addField("member's name", user.username, true)
            .addField("Tag", "#" + user.discriminator, true)
            .addField('ID', message.id)
            .addField('Play at', user.presence.game)
            .addField("Status", user.presence.status)
            .addField("Last message", user.lastMessage, true)
            .addField("account created", user.createdAt)
            .addField("Is he a bot ?", user.bot, true)
            .setFooter("© Kio", "https://image.noelshack.com/fichiers/2020/38/6/1600514999-avatar.png");
        message.channel.send(embed)
    }
});

client.on('message', message => {
    if (message.content === prefix + "help iuser") {
        let ping = Date.now() - message.createdTimestamp + " ms";
        let Embed = new Discord.RichEmbed()
            .setColor('#43b581')
            .setDescription("**The iuser command is used to display the description of the user.** <:information:761199697381294090>\n\nUse: ``*iuser <@user>``!")
            .setFooter("© Kio", "https://image.noelshack.com/fichiers/2020/38/6/1600514999-avatar.png");
        message.channel.send(Embed)
    }
});