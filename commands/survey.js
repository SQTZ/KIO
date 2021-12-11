const Discord = require('discord.js')
const client = new Discord.Client()

const prefix = "*";
const token = require('../config.json');
client.login(token.token);

function emoji(id) {
    return client.emojis.get(id).toString();
}

client.on('message', message => {
    if (message.content.startsWith(prefix + "survey")) {
        let user = message.mentions.users.first() || message.author;
        if (!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send("Code Error 403: You do not have the `ADMINISTRATOR` permission to execute this command! <:error:761199675680227329>")
        let args = message.content.split(" ").slice(1);
        if (!args[0]) return message.reply('Error Code 100: please write a message! <:error:761199675680227329>');;
        if (args[0] === "bug") return message.reply("Error Code 100: please write a message! <:error:761199675680227329>");

        let thingToEcho = args.join(" ")

        let Embed = new Discord.RichEmbed()
            .setThumbnail(user.avatarURL)
            .setColor("#43b581")
            .addField("<:message:761199705409323018> new survey", `${args}`)
            .addField("<:modif:761199695598714880> writed by", `${message.author.username}#${message.author.discriminator}`)
            .setFooter("© Kio", "https://image.noelshack.com/fichiers/2020/38/6/1600514999-avatar.png");

        let surveychannel = message.guild.channels.find('name', 'survey');
        if (!surveychannel) return message.channel.send("Code Error 404: the 'survey' lounge cannot be found! <:error:761199675680227329>");
        surveychannel.send(embed)
            .then(function(message) {
                message.react('✅').then(() => message.react('❌'));

            }).catch(function() {});
        message.channel.send("Code 200: message sent successfully! <:valid:761199690272210944>");
    }
});

client.on('message', message => {
    if (message.content === prefix + "help survey") {
        let ping = Date.now() - message.createdTimestamp + " ms";
        let Embed = new Discord.RichEmbed()
            .setColor('#43b581')
            .setDescription("**The survey command is used to create an advertisement in a lounge.** <:information:761199697381294090>\n\nUse: ``*survey <message>``!")
            .setFooter("© Kio", "https://image.noelshack.com/fichiers/2020/38/6/1600514999-avatar.png");
        message.channel.send(Embed)
    }
});