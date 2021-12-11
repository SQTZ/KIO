const Discord = require('discord.js')
const client = new Discord.Client()

const prefix = "*";
const token = require('../config.json');
client.login(token.token);

function emoji(id) {
    return client.emojis.get(id).toString();
}

client.on('message', message => {
    if (message.content.startsWith(prefix + 'mp')) {
        let args = message.content.split(" ").slice(1);
        if (!message.guild.member(message.author).has("ADMINISTRATOR")) return message.channel.send("Code Error 403: You do not have the `ADMINISTRATOR` permission to execute this command! <:error:761199675680227329>").catch(console.error);
        if (message.member.hasPermission("ADMINISTRATOR")) {
            const member = message.mentions.members.first();
            if (!member) return message.channel.send("Code Error 100: Please mention a member! <:error:761199675680227329>")
            let arg = message.content.split(" ").slice(2);
            let content_msg = arg.join(" ");
            if (!args[0]) return message.channel.send("Code Error 501: An error has occurred. <:Attention:761199676048932864>");
            let embed = new Discord.RichEmbed()
                .setTitle(`<:message:756844975387574275> You received a message from **${message.author.tag}** from the server **${message.guild.name}**`)
                .setDescription(`Message: ${content_msg}`)
                .setColor("#43b581")
                .setFooter("© Kio", "https://image.noelshack.com/fichiers/2020/38/6/1600514999-avatar.png");
            member.send(embed)
            message.channel.send(`Code 200: message sent successfully at **${member.user.tag}**! <:valid:761199690272210944>`)
            message.delete();
        }
    }
});