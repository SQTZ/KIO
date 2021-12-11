const Discord = require('discord.js')
const client = new Discord.Client()

const prefix = "*";
const token = require('../config.json');
client.login(token.token);

function emoji(id) {
    return client.emojis.get(id).toString();
}

client.on('message', message => {
    if (message.content.startsWith(prefix + "suggest")) {
        let user = message.mentions.users.first() || message.author;
        let args = message.content.split(" ").slice(1);
        if (!args[0]) return message.channel.send('Error Code 100: please write a message! <:error:761199675680227329>');;
        if (args[0] === "bug") return message.channel.send("Error Code 100: please write a message! <:error:761199675680227329>");
        args = args.join(" ");

        let Embed = new Discord.RichEmbed()
            .setThumbnail(user.avatarURL)
            .setColor("#43b581")
            .addField("<:message:761199705409323018> new suggest", `${args}`)
            .addField("<:modif:761199695598714880> writed by", `${message.author.username}#${message.author.discriminator}`)
            .setFooter("© Kio", "https://image.noelshack.com/fichiers/2020/38/6/1600514999-avatar.png");

        let suggestchannel = message.guild.channels.find('name', 'suggest');
        if (!suggestchannel) return message.channel.send("Code Error 404: the 'suggest' lounge cannot be found! <:error:761199675680227329>");

        suggestchannel.send(Embed)
        message.channel.send("Code 200: message sent successfully! <:valid:761199690272210944>");
    }
});

client.on('message', message => {
    if (message.content === prefix + "help suggest") {
        let ping = Date.now() - message.createdTimestamp + " ms";
        let Embed = new Discord.RichEmbed()
            .setColor('#43b581')
            .setDescription("**The suggest command is used to give a suggestion to improve Kio.** <:information:761199697381294090>\n\nUse: ``*suggest <message>``!")
            .setFooter("© Kio", "https://image.noelshack.com/fichiers/2020/38/6/1600514999-avatar.png");
        message.channel.send(Embed)
    }
});