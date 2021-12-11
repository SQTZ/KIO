const Discord = require('discord.js')
const client = new Discord.Client()

const prefix = "*";
const token = require('../config.json');
client.login(token.token);

function emoji(id) {
    return client.emojis.get(id).toString();
}

//Le membre qui rejoint / part
client.on("guildMemberAdd", (member) => {

    let channel = client.channels.get('');
    let Embed = new Discord.RichEmbed()
        .setColor('GREEN')
        .setDescription("<:Attention:761199676048932864> Joined!")
        .addField("Member's name", `${member.user}`, true)
        .addField("ID", `${member.id}`, true)
        .addField("Server", `${member.guild}`, true)
        .setFooter("© Kio", "https://image.noelshack.com/fichiers/2020/38/6/1600514999-avatar.png");
    channel.send(Embed)
});

client.on("guildMemberRemove", (member) => {

    let channel = client.channels.get('');
    let Embed = new Discord.RichEmbed()
        .setColor('#fc3c3c')
        .setDescription("<:Attention:761199676048932864> Left!")
        .addField("Member's name", `${member.user}`, true)
        .addField("ID", `${member.id}`, true)
        .addField("Server", `${member.guild}`, true)
        .setFooter("© Kio", "https://image.noelshack.com/fichiers/2020/38/6/1600514999-avatar.png");
    channel.send(Embed)
});


//La ou Lemon arrive
client.on("guildCreate", (guild) => {

    let channel = client.channels.get('');
    let Embed = new Discord.RichEmbed()
        .setFooter("© Kio", "https://image.noelshack.com/fichiers/2020/38/6/1600514999-avatar.png")
        .setColor("#43b581")
        .setDescription("<:Attention:761199676048932864> Server Joined!")
        .setThumbnail(guild.iconURL)
        .addField("Server", `${guild}`, true)
        .addField("ID", `${guild.id}`, true)
        .addField("Number of members", `${guild.members.filter(member => !member.user.bot).size}`);
    channel.send(Embed)
});

client.on("guildDelete", (guild) => {

    let channel = client.channels.get('');
    let Embed = new Discord.RichEmbed()
        .setFooter("© Kio", "https://image.noelshack.com/fichiers/2020/38/6/1600514999-avatar.png")
        .setColor("#43b581")
        .setDescription("<:Attention:761199676048932864> Server left!")
        .setThumbnail(guild.iconURL)
        .addField("Server", `${guild}`, true)
        .addField("ID", `${guild.id}`, true)
        .addField("Number of members", `${guild.members.filter(member => !member.user.bot).size}`);
    channel.send(Embed)
});

//Message Delete
client.on('messageDelete', message => {
    let Embed = new Discord.RichEmbed()
        .setColor("#43b581")
        .setAuthor('Deleted message!', 'https://image.noelshack.com/fichiers/2020/38/6/1600514999-avatar.png')
        .addField('Membre', `${message.author}`, true)
        .addField('Dated', `${new Date()}`, true)
        .addField('Message', `${message.cleanContent}`)
        .addField('Lounge', `${message.channel.name}`)
        .setFooter("© Kio", "https://image.noelshack.com/fichiers/2020/38/6/1600514999-avatar.png")

    let logschannel = message.guild.channels.find(`name`, "logs");
    if (!logschannel) return message.channel.send("Le salon 'logs' est introuvable");



    logschannel.send(Embed);
});

//Message modifié
client.on('messageUpdate', (oldMessage, newMessage) => {
    if (newMessage.channel.type == 'text' && newMessage.cleanContent != oldMessage.cleanContent) {
        let Embed = new Discord.RichEmbed()
            .setColor("#43b581")
            .setAuthor('Modified message!', 'https://image.noelshack.com/fichiers/2020/38/6/1600514999-avatar.png')
            .addField('Member', `${newMessage.author}`, true)
            .addField('Dated', `${new Date()}`, true)
            .addField('Old message', `${oldMessage.cleanContent}`)
            .addField('New message', `${newMessage.cleanContent}`)
            .addField('Lounge', `${newMessage.channel.name}`)
            .setFooter("© Kio", "https://image.noelshack.com/fichiers/2020/38/6/1600514999-avatar.png")

        let logschannel = newMessage.guild.channels.find(`name`, "logs");
        if (!logschannel) return newMessage.channel.send("Le salon 'logs' est introuvable");



        logschannel.send(Embed);
    }
});