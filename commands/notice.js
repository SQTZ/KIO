const Discord = require('discord.js')
const client = new Discord.Client()

const prefix = "*";
const token = require('../config.json');
client.login(token.token);

function emoji(id) {
    return client.emojis.get(id).toString();
}

client.on('message', message => {
    if (message.content.startsWith(prefix + "notice")) {
        let user = message.mentions.users.first() || message.author;
        let args = message.content.split(" ").slice(1);
        if (!args[0]) return message.channel.send('Error Code 100: please write a message! <:error:761199675680227329>');;
        if (args[0] === "bug") return message.channel.send("Error Code 100: please write a message! <:error:761199675680227329>");
        args = args.join(" ");

        let Embed = new Discord.RichEmbed()
            .setThumbnail(user.avatarURL)
            .setColor("#43b581")
            .addField("<:message:756844975387574275> new notice", `${args}`)
            .addField("<:modif:756844975324659712> writed by", `${message.author.username}#${message.author.discriminator}`)
            .setFooter("© Kio", "https://image.noelshack.com/fichiers/2020/38/6/1600514999-avatar.png");


        let noticechannel = message.guild.channels.find('name', 'notice');
        if (!noticechannel) return message.channel.send("Code Error 404: the 'notice' lounge cannot be found! <:error:761199675680227329>");

        noticechannel.send(Embed)
        message.channel.send("Code 200: message sent successfully! <:valid:761199690272210944>");
    }
});

client.on('message', message => {
    if (message.content === prefix + "help notice") {
        let ping = Date.now() - message.createdTimestamp + " ms";
        let Embed = new Discord.RichEmbed()
            .setColor('#43b581')
            .setDescription("**The notice command is used to give its opinion on Kio.** <:information:761199697381294090>\n\nUse: ``*notice <message>``!")
            .setFooter("© Kio", "https://image.noelshack.com/fichiers/2020/38/6/1600514999-avatar.png");
        message.channel.send(Embed)
    }
});