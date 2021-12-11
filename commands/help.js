const Discord = require('discord.js')
const client = new Discord.Client()

const prefix = "*";
const token = require('../config.json');
client.login(token.token);

function emoji(id) {
    return client.emojis.get(id).toString();
}

client.on('message', message => {
    if (message.content === prefix + "help") {
        let Embed = new Discord.RichEmbed()
            .setColor('#43b581')
            .setThumbnail('https://image.noelshack.com/fichiers/2020/38/6/1600514999-avatar.png')
            .setDescription('To execute a command, do ``*<name>`` <:information:761199697381294090>\nMore information on a command, do ``*help <command>!``')
            .addField("<:rouages:761199703635263488> **Utils (6)**", "``avatar`` - ``embed``\n``iserver`` - ``suggest``\n``notice`` - ``ticket``", true)
            .addField("<:shield:761199697205133332> **Mods (9)**", "``ban`` - ``clear`` - ``iuser``\n``kick`` - ``mute`` - ``unmute``\n``softban`` - ``warn`` - ``close``", true)
            .addField('<:admin:761199672815517696> **Admin (2)**', "``survey`` - ``mp``", true)
            .addField("<:modrateur:761199695384150036> **Kio (6)**", "``bug`` - ``invite`` - ``ping``\n``web`` - ``stats``\n``support``", true)
            .addField("**More Informations**", "<:discord:761199677466607617> [Support](https://discord.gg/mdZnYTx)\n<:lien:761199700396212244> [Invite](https://discordapp.com/oauth2/authorize?client_id=663397729967407105&scope=bot&permissions=8)\n<:twitter:761199686094422016> [Twitter](https://twitter.com)\n<:insta:761199682448785438> [Instagram](https://instagram.com)", true)
            .setFooter("© Kio", "https://image.noelshack.com/fichiers/2020/38/6/1600514999-avatar.png");
        message.channel.send(Embed)
    }
});