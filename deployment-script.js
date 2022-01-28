const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const dotenv = require('dotenv');
dotenv.config();

const clientId = process.env.CLIENT_ID;
const guildId = process.env.BOT_TOKEN;
const token = process.env.BOT_TOKEN;

const commands = [
    new SlashCommandBuilder().setName('koks').setDescription('Kokspreis'),
    new SlashCommandBuilder().setName('hashish').setDescription('Hashishpreis'),
    new SlashCommandBuilder().setName('weisheit').setDescription('Krasse Weisheit Whallah'),
]
    .map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
    .then(() => console.log('Successfully registered application commands.'))
    .catch(console.error);