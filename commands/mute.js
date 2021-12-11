const Discord = require('discord.js')
const client = new Discord.Client()

const prefix = "*";
const token = require('../config.json');
client.login(token.token);

function emoji(id) {
    return client.emojis.get(id).toString();
}

client.on('message', function(message) {
    if (message.content.startsWith(prefix + "mute")) {
        if (message.channel.type === "dm") return;
        if (message.mentions.users.size === 0) {
            return message.channel.send("Code Error 100: Please mention a member! <:error:761199675680227329>");
        }
        let muteMember = message.guild.member(message.mentions.users.first());
        if (!muteMember) {
            return message.channel.send("Code Error 404: Member cannot be found! <:error:761199675680227329>");
        }
        if (!message.guild.member(client.user).hasPermission("MANAGE_GUILD")) {
            return message.channel.send("Code Error 403: You do not have the `MANAGE_GUILD` permission to execute this command! <:error:761199675680227329>").catch(console.error);
        }
        message.guild.channels.forEach(channel => {
            channel.overwritePermissions(muteMember, { SEND_MESSAGES: false })
        })
        let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (!rUser) return message.channel.send("Code Error 404: Member cannot be found! <:error:761199675680227329>");
        let messageArray = message.content.split(" ");
        let args = messageArray.slice(1);
        let rreason = args.join(" ").slice(22);
        let Embed = new Discord.RichEmbed()
            .setTitle("Muted")
            .setFooter("© Kio", "https://image.noelshack.com/fichiers/2020/38/6/1600514999-avatar.png")
            .setColor("#43b581")
            .addField("Muted member", `${rUser}`, true)
            .addField("Moderator", `${message.author}`, true)
            .addField("Channel", message.channel)
            .addField("Do it", message.createdAt)
            .addField("Reason", rreason);

        let logschannel = message.guild.channels.find(`name`, "logs");
        if (!logschannel) return message.channel.send("Code Error 404: the 'logs' lounge cannot be found! <:error:761199675680227329>");



        logschannel.send(Embed);
        message.react("👍")

        return;
    }
});

client.on('message', message => {
    if (message.content === prefix + "help mute") {
        let ping = Date.now() - message.createdTimestamp + " ms";
        let Embed = new Discord.RichEmbed()
            .setColor('#43b581')
            .setDescription("**The mute command is used to mute a user.** <:information:761199697381294090>\n\nUse: ``*mute <@user> <message>``!")
            .setFooter("© Kio", "https://image.noelshack.com/fichiers/2020/38/6/1600514999-avatar.png");
        message.channel.send(Embed)
    }
});