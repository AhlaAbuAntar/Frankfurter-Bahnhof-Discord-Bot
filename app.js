const Discord = require('discord.js');
//heroku integration/
const aws = require('aws-sdk');
////////////////////

const client = new Discord.Client({
    intents: [Discord.Intents.FLAGS.GUILDS]
});
const dotenv = require('dotenv');
dotenv.config();

//Heroku .env files//////////////////////////
let BOT_TOKEN = new aws.BOT_TOKEN({
    accessKeyId: process.env.BOT_TOKEN,
    secretAccessKey: process.env.BOT_TOKEN
});

let CLIENT_ID = new aws.CLIENT_ID({
    accessKeyId: process.env.CLIENT_ID,
    secretAccessKey: process.env.CLIENT_ID
});

let GUILD_ID = new aws.GUILD_ID({
    accessKeyId: process.env.GUILD_ID,
    secretAccessKey: process.env.GUILD_ID
});
/////////////////////////////////////////////////
client.once('ready', () => {
    console.log('successfully started!');
});
client.on('interactionCreate', async (interaction) => {
    if(!interaction.isCommand()) return;

    const {commandName} = interaction;

    switch (commandName)
    {
        case 'koks':
            await interaction.reply('90 ewro 1g Koks ' + '' + interaction.user.username +  ' '+'Schau bruder, Koks nicht guten, bitte besuchen www.kmdd.de');
            console.log('Post Kokspreis');
            break;
        case 'hashish':
            await interaction.reply('10 ewro 1g Hashish ' +  '' + interaction.user.username  + ' '+ 'Schau bruder, Koks nicht guten, bitte besuchen www.kmdd.de');
            console.log('Post Hashishpreis');
            break;
        default:
            await interaction.reply('karbonat error');
            console.log('Karbonat error');
            break;
    }
})


client.login(process.env.BOT_TOKEN);