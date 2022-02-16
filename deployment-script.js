const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const dotenv = require('dotenv');
dotenv.config();

const clientId = process.env.CLIENT_ID;
const token = process.env.BOT_TOKEN;

const commands = [
    new SlashCommandBuilder().setName('koks').setDescription('Kokspreis'),
    new SlashCommandBuilder().setName('hashish').setDescription('Hashishpreis'),
    new SlashCommandBuilder().setName('weisheit').setDescription('Krasse Weisheit Whallah'),
    new SlashCommandBuilder().setName('impfung').setDescription('Krasse Impfung Whallah'),
    new SlashCommandBuilder().setName('suicide').setDescription('Bruder nein'),
    new SlashCommandBuilder().setName('alphasong').setDescription('Einmal hören, einmal krass'),
    new SlashCommandBuilder().setName('deepsong').setDescription('Harte Zeiten')
]
    .map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(token);

rest.put(Routes.applicationCommands(clientId), { body: commands })
    .then(() => console.log('Successfully registered application commands.'))
    .catch(console.error);