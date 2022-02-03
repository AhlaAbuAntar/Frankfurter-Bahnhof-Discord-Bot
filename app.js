const Discord = require('discord.js');
const weisheit = require('./quotes.json');
const { MessageEmbed } = require('discord.js');
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
            await interaction.reply('85 ewro 1g Koks ' +  '' + interaction.user.username  + '\n'+
                'Schau bruder Koks nicht guten, bitte besuchen https://www.kmdd.de');
            console.log('Post Kokspreis');
            break;

        case 'hashish':
            if(interaction.user.username != 'wadafacc')
            {
                await interaction.reply('10 ewro 1g Hashish \n' +
                    interaction.user.username + ', Schau bruder Hashish nicht guten, bitte besuchen https://www.kmdd.de');
                console.log('Post Hashishpreis');
            }
            else
            {
                await interaction.reply('Timo du bisch so hässlich sogar dealer wend dir kein Hashish verkaufe');
                console.log('Timo is a dog');
            }
            break;

        case 'weisheit':
            //Set up Quotes of Ahmad Patron
            const quotesOfAhmad = weisheit[Math.round((Math.random() * weisheit.length))];
            await interaction.reply(quotesOfAhmad);
            console.log('Post Weisheit');
            break;

        case 'impfung':
            //Set up vaccine
            const impfungEmbed = new MessageEmbed()
                .setTitle('FRANKFURT AM MAIN ALLLLLLLLLLLLLLLLE')
                .setDescription('LAK EINFACH IMPFUNG KRASS WHALLAH')
                .setImage('https://preview.redd.it/oiszt98yqmf61.jpg?auto=webp&s=ff0f3d4324b9f0f474fc30c90f8fc17f26d684c5');
             await interaction.reply({ embeds: [impfungEmbed] });
             console.log("vaccine injected");
            break;
        case 'suicide':
            await interaction.reply('Nicht gut diesen, rufen bitte diesen: 143');
            break;
        default:
            await interaction.reply('Karbonat error');
            console.log('Karbonat error');
            break;

    }
})

client.login(process.env.BOT_TOKEN);