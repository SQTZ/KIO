const Discord = require('discord.js')
const client = new Discord.Client()

const prefix = "*";
const token = require('../config.json');
client.login(token.token);

function emoji(id) {
    return client.emojis.get(id).toString();
}

let verifLevels = ["Any", "Low", "Average", "(╯°□°）╯︵  ┻━┻", "┻━┻ミヽ(ಠ益ಠ)ノ彡┻━┻"];
let region = {
    "brazil": ":flag_br: Brazil",
    "eu-central": ":flag_eu: central Europe",
    "singapore": ":flag_sg: Singapore",
    "us-central": ":flag_us: United States of America",
    "sydney": ":flag_au: Sydney",
    "us-east": ":flag_us: Eastern America",
    "us-south": ":flag_us: South America",
    "us-west": ":flag_us: West America",
    "eu-west": ":flag_eu: Western Europe",
    "vip-us-east": ":flag_us: VIP East America",
    "london": ":flag_gb: London",
    "amsterdam": ":flag_nl: Amsterdam",
    "hongkong": ":flag_hk: Hong Kong",
    "russia": ":flag_ru: Russia",
    "southafrica": ":flag_za: South Africa"
};

client.on('message', message => {
    if (message.content === prefix + "iserver") {
        let server_size =
            message.guild.members.size
        let Embed = new Discord.RichEmbed()
            .setColor("#43b581")
            .setThumbnail(message.guild.iconURL)
            .addField('Server name', message.guild.name, true)
            .addField('ID Server ', message.guild.id, true)
            .addField('Server Creator:', message.guild.owner)
            .addField('Human', `${message.guild.memberCount}`, true)
            .addField('Bots', `${message.guild.cache.filter(member => !member.user.bot).size}`, true)
            .addField('Member status', `<:Online:761199680897155083> **${message.guild.members.filter(online => online.presence.status === 'online').size}** Online\n<:Idle:761199680029327370> **${message.guild.members.filter(idle => idle.presence.status === 'idle').size}** Idle\n<:Dnd:761199671166238752> **${message.guild.members.filter(dnd => dnd.presence.status === 'dnd').size}** Dnd\n<:Offline:761199671233609729> **${message.guild.members.filter(offline => offline.presence.status === 'offline').size}** Offline\n<:4944_Streaming:761199670974087228> **${message.guild.members.filter(streaming => streaming.presence.status === 'streaming').size}** Streaming`)
            .addField("Channels", message.guild.channels.size, true)
            .addField("Roles", message.guild.roles.size, true)
            .addField("Region", message.guild.region)
            .addField("Verification level", verifLevels[message.guild.verificationLevel])
            .setFooter("© Kio", "https://image.noelshack.com/fichiers/2020/38/6/1600514999-avatar.png");
        message.channel.send(Embed)

    }
});

client.on('message', message => {
    if (message.content === prefix + "help iserver") {
        let ping = Date.now() - message.createdTimestamp + " ms";
        let Embed = new Discord.RichEmbed()
            .setColor('#43b581')
            .setDescription("**The iserver command is used to display server statistics.** <:information:761199697381294090>\n\nUse: ``*iserver``!")
            .setFooter("© Kio", "https://image.noelshack.com/fichiers/2020/38/6/1600514999-avatar.png");
        message.channel.send(Embed)
    }
});