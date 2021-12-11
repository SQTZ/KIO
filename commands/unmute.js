const Discord = require('discord.js')
const client = new Discord.Client()

const prefix = "*";
const token = require('../config.json');
client.login(token.token);

function emoji(id) {
    return client.emojis.get(id).toString();
}

client.on('message', function(message) {
    if (message.content.startsWith(prefix + "unmute")) {

        if (message.channel.type === "dm") return;
        if (message.mentions.users.size === 0) {
            return message.channel.send("Code Error 100: Please mention a member! <:error:761199675680227329>");
        }
        let unmuteMember = message.guild.member(message.mentions.users.first());
        if (!unmuteMember) {
            return message.channel.send("Code Error 404: Member cannot be found! <:error:761199675680227329>");
        }
        if (!message.guild.member(client.user).hasPermission("MANAGE_GUILD")) {
            return message.channel.send("Code Error 403: You do not have the `MANAGE_GUILD` permission to execute this command! <:error:761199675680227329>").catch(console.error);
        }
        message.guild.channels.forEach(channel => {
            channel.overwritePermissions(unmuteMember, { SEND_MESSAGES: true })
        })
        let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (!rUser) return message.channel.send("Code Error 404: Member cannot be found! <:error:761199675680227329>");
        let messageArray = message.content.split(" ");
        let args = messageArray.slice(1);
        let Embed = new Discord.RichEmbed()
            .setTitle("Unmuted")
            .setFooter("© Kio", "https://image.noelshack.com/fichiers/2020/38/6/1600514999-avatar.png")
            .setColor("#43b581")
            .addField("Unmuted member", `${rUser}`, true)
            .addField("Moderator", `${message.author}`, true)
            .addField("Channel", message.channel)
            .addField("Do it", message.createdAt);

        let logschannel = message.guild.channels.find(`name`, "logs");
        if (!logschannel) return message.channel.send("Code Error 404: the 'logs' lounge cannot be found! <:error:761199675680227329>");



        logschannel.send(Embed);
        message.react("👍")

        return;

    }
});

client.on('message', message => {
    if (message.content === prefix + "help unmute") {
        let ping = Date.now() - message.createdTimestamp + " ms";
        let Embed = new Discord.RichEmbed()
            .setColor('#43b581')
            .setDescription("**The unmute command is used to unmute a user.** <:information:761199697381294090>\n\nUse: ``*unmute <@user> <message>``!")
            .setFooter("© Kio", "https://image.noelshack.com/fichiers/2020/38/6/1600514999-avatar.png");
        message.channel.send(Embed)
    }
});