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

    let channel = client.channels.get('713719434044244018');
    let Embed = new Discord.RichEmbed()
        .setColor('GREEN')
        .setDescription("Joined! <:Attention:761199676048932864>")
        .addField("Member's name", `${member.user}`, true)
        .addField("ID", `${member.id}`, true)
        .addField("Server", `${member.guild}`, true)
        .setFooter("© Kio", "https://image.noelshack.com/fichiers/2020/38/6/1600514999-avatar.png");
    channel.send(Embed)
});

client.on("guildMemberRemove", (member) => {

    let channel = client.channels.get('713719434044244018');
    let Embed = new Discord.RichEmbed()
        .setColor('#fc3c3c')
        .setDescription("Lifted! <:Attention:761199676048932864>")
        .addField("Member's name", `${member.user}`, true)
        .addField("ID", `${member.id}`, true)
        .addField("Server", `${member.guild}`, true)
        .setFooter("© Kio", "https://image.noelshack.com/fichiers/2020/38/6/1600514999-avatar.png");
    channel.send(Embed)
});


//La ou Lemon arrive
client.on("guildCreate", (guild) => {

    let channel = client.channels.get('728580063028838420');
    let Embed = new Discord.RichEmbed()
        .setColor('#43b581')
        .setDescription("Server Joined! <:Attention:761199676048932864>")
        .setThumbnail(guild.iconURL)
        .addField("Server", `${guild}`, true)
        .addField("ID", `${guild.id}`, true)
        .addField("Membercount", `${guild.members.filter(member => !member.user.bot).size}`)
        .setFooter("© Kio", "https://image.noelshack.com/fichiers/2020/38/6/1600514999-avatar.png");
    channel.send(Embed)
});

client.on("guildDelete", (guild) => {

    let channel = client.channels.get('728580063028838420');
    let Embed = new Discord.RichEmbed()
        .setColor('#43b581')
        .setDescription("Server Lifted! <:Attention:761199676048932864>")
        .setThumbnail(guild.iconURL)
        .addField("Server", `${guild}`, true)
        .addField("ID", `${guild.id}`, true)
        .addField("Membercount", `${guild.members.filter(member => !member.user.bot).size}`)
        .setFooter("© Kio", "https://image.noelshack.com/fichiers/2020/38/6/1600514999-avatar.png");
    channel.send(Embed)
});