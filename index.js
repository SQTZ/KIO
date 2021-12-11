const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const Enmap = require('enmap');

const { prefix, token } = require('./config.json');

client.on('ready', () => {
    let serveur = client.guilds.size;
    let membre = client.users.size; ///j'ai défini des valeur pour faire jolie

    const statbot = [

        `V.beta | © Kio`,
        `*help for more`,
        `${serveur} servers !`

    ];

    setInterval(function() {

        const statutID = Math.floor(Math.random() * Math.floor(statbot.length)); /// ici j'ai choisi que sa met au hasard
        client.user.setActivity(statbot[statutID]);
    }, 30000);

});

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`[ LOADING ] [ COMMANDES ] ${commandName}`);
    client.commands.set(command.name, command);
}

client.on("guildCreate", guild => {
    let channelID;
    let channels = guild.channels;
    channelLoop:
        for (let c of channels) {
            let channelType = c[1].type;
            if (channelType === "text") {
                channelID = c[0];
                break channelLoop;
            }
        }
    let Embed = new Discord.RichEmbed()
        .setDescription("Thanks for adding me to your server! <:server:761199688577318932>\n\n**Prerequisites:**Put Kio above the hierarchy to access all services.\n**Others:** If you have a problem with Kio (major bug, permissions issues, other ...), please come to our Support and do ``*bug <your problem>!``")
        .setColor('#43b581')
        .setFooter("© Kio", "https://image.noelshack.com/fichiers/2020/38/6/1600514999-avatar.png");
    let channel = client.channels.get(guild.systemChannelID || channelID);
    channel.send(Embed);
});