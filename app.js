const Discord = require('discord.js');
const weisheit = require('./quotes.json');
const client = new Discord.Client({
    intents: [Discord.Intents.FLAGS.GUILDS]
});

const dotenv = require('dotenv');
const {quote} = require("@discordjs/builders");
dotenv.config();

client.once('ready', () => {
    console.log('successfully started!');
});


//Check if interaction is a Command
client.on('interactionCreate', async (interaction) => {
    if(!interaction.isCommand()) return;

    const {commandName} = interaction;

    //Switch cases of interaction
    switch (commandName)
    {
        case 'koks':
            await interaction.reply('90 ewro 1g Koks ' + '' + interaction.user.username +  '\n'+'Schau bruder, Koks nicht guten, bitte besuchen https://www.kmdd.de');
            console.log('Post Kokspreis');
            break;
        case 'hashish':
            await interaction.reply('10 ewro 1g Hashish ' +  '' + interaction.user.username  + '\n'+ 'Schau bruder, Koks nicht guten, bitte besuchen https://www.kmdd.de');
            console.log('Post Hashishpreis');
            break;
        case 'weisheit':
            //Set up Quotes of Ahmad Patron
            const quotesOfAhmad = weisheit[Math.round((Math.random() * weisheit.length))];
            await interaction.reply(quotesOfAhmad);
            console.log('Post Weisheit')
            break;
        default:
            await interaction.reply('Karbonat error');
            console.log('Karbonat error');
            break;
    }
})

client.login(process.env.BOT_TOKEN);