const Discord = require('discord.js');
const client = new Discord.Client({
    intents: [Discord.Intents.FLAGS.GUILDS]
});
const dotenv = require('dotenv');
dotenv.config();



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