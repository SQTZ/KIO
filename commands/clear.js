const Discord = require('discord.js')
const client = new Discord.Client()

const prefix = "*";
const token = require('../config.json');
client.login(token.token);

function emoji(id) {
    return client.emojis.get(id).toString();
}

client.on('message', function(message) {
    if (message.content.startsWith(prefix + "clear")) {
        if (!message.guild.member(message.author).hasPermission("MANAGE_GUILD")) return message.channel.send("Code Error 403: You do not have the `MANAGE_GUILD` permission to execute this command! <:error:761199675680227329>").catch(console.error);

        const suppression = message.content.substr(prefix.length + 6);
        if (suppression < 2 || suppression > 101) {
            return message.channel.send("Code Error 400: The value you entered is invalid, please choose a value between 2 and 100! <:error:761199675680227329>");
        }
        while (suppression > 100) {
            message.channel.bulkDelete(100, true).catch(err => message.channel.send(err))
            const suppression = suppression - 100
        }
        message.channel.bulkDelete(suppression, true).then(ok => {
            message.channel.send("Code 200: **Removed" + "" + suppression + "" + " messages!** <:valid:761199690272210944>")
                .then(message => setTimeout(function() {
                    message.delete()
                }, 100))
        })
    }
});

client.on('message', message => {
    if (message.content === prefix + "help clear") {
        let ping = Date.now() - message.createdTimestamp + " ms";
        let Embed = new Discord.RichEmbed()
            .setColor('#43b581')
            .setDescription("**The clear set command to delete multiple messages in a lounge.** <:information:761199697381294090>\n\nUse: ``*clear <number>``!")
            .setFooter("© Kio", "https://image.noelshack.com/fichiers/2020/38/6/1600514999-avatar.png");
        message.channel.send(Embed)
    }
});