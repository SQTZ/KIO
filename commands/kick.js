const Discord = require('discord.js')
const client = new Discord.Client()

const prefix = "*";
const token = require('../config.json');
client.login(token.token);

function emoji(id) {
    return client.emojis.get(id).toString();
}

client.on('message', message => {
    if (!message.guild) return;

    if (message.content.startsWith('*kick')) {
        if (!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.channel.send("Code Error 403: You do not have the `KICK_MEMBERS` permission to execute this command! <:error:761199675680227329>").catch(console.error);
        const user = message.mentions.users.first();
        if (user) {
            const member = message.guild.member(user);
            if (member) {
                member.kick().then(() => {
                    let messageArray = message.content.split(" ");
                    let args = messageArray.slice(1);
                    let rreason = args.join(" ").slice(22);
                    let Embed = new Discord.RichEmbed()
                        .setTitle("Kick")
                        .setFooter("© Kio", "https://image.noelshack.com/fichiers/2020/38/6/1600514999-avatar.png")
                        .setColor("#43b581")
                        .addField("Kicked member", user, true)
                        .addField("Moderator", `${message.author}`, true)
                        .addField("Channel", message.channel)
                        .addField("Do it", message.createdAt)
                        .addField("Reason", rreason);

                    let logschannel = message.guild.channels.find(`name`, "logs");
                    if (!logschannel) return message.channel.send("Code Error 404: the 'logs' lounge cannot be found! <:error:761199675680227329>");



                    logschannel.send(Embed);
                    message.react("👍");

                    return;

                    // We let the message author know we were able to kick the person
                }).catch(err => {
                    // An error happened
                    // This is generally due to the bot not being able to kick the member,
                    // either due to missing permissions or role hierarchy
                    message.channel.send("Code Error 501: An error has occurred. Make sure Kio is above the hierarchy! <:Attention:761199676048932864>");
                    // Log the error
                    console.error(err);
                });
            } else {
                // The mentioned user isn't in this guild
                message.channel.send("Code Error 404: Member cannot be found! <:error:761199675680227329>");
            }
            // Otherwise, if no user was mentioned
        } else {
            message.channel.send("Code Error 100: Please mention a member! <:error:761199675680227329>");
        }
    }
});

client.on('message', message => {
    if (message.content === prefix + "help kick") {
        let ping = Date.now() - message.createdTimestamp + " ms";
        let Embed = new Discord.RichEmbed()
            .setColor('#43b581')
            .setDescription("**The kick command is used to kick a user.** <:information:761199697381294090>\n\nUse: ``*kick <@user> <message>``!")
            .setFooter("© Kio", "https://image.noelshack.com/fichiers/2020/38/6/1600514999-avatar.png");
        message.channel.send(Embed)
    }
});