const Discord = require('discord.js')
const client = new Discord.Client()

const prefix = "*";
const token = require('../config.json');
client.login(token.token);

function emoji(id) {
    return client.emojis.get(id).toString();
}

client.on("message", async message => {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if (cmd === prefix + `warn`) {

        //!report @ned this is the reason
        if (!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.channel.send("Code Error 403: You do not have the `BAN_MEMBERS` permission to execute this command! <:error:761199675680227329>").catch(console.error);
        let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (!rUser) return message.channel.send("Code Error 404: Member cannot be found! <:error:761199675680227329>");
        let rreason = args.join(" ").slice(22);
        let warnEmbed = new Discord.RichEmbed()
            .setTitle("Warned")
            .setFooter("© Kio", "https://image.noelshack.com/fichiers/2020/38/6/1600514999-avatar.png")
            .setColor("#43b581")
            .addField("Warned member", `${rUser}`, true)
            .addField("Moderator", `${message.author}`, true)
            .addField("Channel", message.channel)
            .addField("Do it", message.createdAt)
            .addField("Reason", rreason);


        let warnchannel = message.guild.channels.find(`name`, "logs");
        if (!warnchannel) return message.channel.send("Code Error 404: the 'logs' lounge cannot be found! <:error:761199675680227329>");



        warnchannel.send(warnEmbed);
        message.react("👍")

        return;
    }
});

client.on('message', message => {
    if (message.content === prefix + "help warn") {
        let ping = Date.now() - message.createdTimestamp + " ms";
        let Embed = new Discord.RichEmbed()
            .setColor('#43b581')
            .setDescription("**The warn command is used to warn a user.** <:information:761199697381294090>\n\nUse: ``*warn <@user> <message>``!")
            .setFooter("© Kio", "https://image.noelshack.com/fichiers/2020/38/6/1600514999-avatar.png");
        message.channel.send(Embed)
    }
});