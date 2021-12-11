const Discord = require('discord.js')
const client = new Discord.Client()

const prefix = "*";
const token = require('../config.json');
client.login(token.token);

function emoji(id) {
    return client.emojis.get(id).toString();
}

var userTickets = new Map();

client.on('message', message => {
    if (message.content === prefix + 'ticket') {
        let user = message.mentions.users.first() || message.author;
        const reason = message.content.split(" ").slice(1).join(" ");
        if (!message.guild.roles.exists("name", "Support Staff")) return message.channel.send(`Code Error 404: This server doesn't have a \`Support Staff\` role made, so the ticket won't be opened.\nIf you are an administrator, make one with that name exactly and give it to users that should be able to see tickets. <:error:761199675680227329>`);
        if (message.guild.channels.exists("name", "ticket-" + message.author.id)) return message.channel.send(`Error Code 303: You already have a ticket open. <:Attention:761199676048932864>`);
        message.guild.createChannel(`ticket-${message.author.id}`, "text").then(c => {
            let role = message.guild.roles.find("name", "Support Staff");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: false
            });
            c.overwritePermissions(message.author, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });
            message.channel.send(`Code 200: Your ticket has been created, #${c.name}. <:valid:761199690272210944>`);
            const embed = new Discord.RichEmbed()
                .setColor("#43b581")
                .setThumbnail(user.avatarURL)
                .addField(`Hey ${message.author.username}!`, `\nPlease try explain why you opened this ticket with as much detail as possible. Our **Support Staff** will be here soon to help. <:modif:761199695598714880>`)
                .setFooter("© Kio", "https://image.noelshack.com/fichiers/2020/38/6/1600514999-avatar.png");
            c.send({
                embed: embed
            });
        }).catch(console.error); // Send errors to console
    }
});

client.on('message', message => {
    if (message.content === prefix + 'close') {
        if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`Code Error 403: You can't use the close command outside of a ticket channel. <:error:761199675680227329>`);
        // Confirm delete - with timeout (Not command)
        message.channel.send(`Code 100: Are you sure? Once confirmed, you cannot reverse this action!\nTo confirm, type \`*confirm\`. This will time out in 10 seconds and be cancelled. <:Attention:761199676048932864>`)
            .then((m) => {
                message.channel.awaitMessages(response => response.content === '*confirm', {
                        max: 1,
                        time: 10000,
                        errors: ['time'],
                    })
                    .then((collected) => {
                        message.channel.delete();
                    })
                    .catch(() => {
                        m.edit('Code Error 409: Ticket close timed out, the ticket was not closed. <:error:761199675680227329>').then(m2 => {
                            m2.delete();
                        }, 3000);
                    });
            });
    }
});

client.on('message', message => {
    if (message.content === prefix + "help new") {
        let ping = Date.now() - message.createdTimestamp + " ms";
        let Embed = new Discord.RichEmbed()
            .setColor('#43b581')
            .setDescription("**The new command is used to create a ticket.** <:information:761199697381294090>\n\nUse: ``*new``!")
            .setFooter("© Kio", "https://image.noelshack.com/fichiers/2020/38/6/1600514999-avatar.png");
        message.channel.send(Embed)
    }
});

client.on('message', message => {
    if (message.content === prefix + "help close") {
        let ping = Date.now() - message.createdTimestamp + " ms";
        let Embed = new Discord.RichEmbed()
            .setColor('#43b581')
            .setDescription("**The close command is used to close a ticket.** <:information:761199697381294090>\n\nUse: ``*close``!")
            .setFooter("© Kio", "https://image.noelshack.com/fichiers/2020/38/6/1600514999-avatar.png");
        message.channel.send(Embed)
    }
});