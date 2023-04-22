const functions = require('firebase-functions');
const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.Guilds, Intents.FLAGS.GuildMessages] });

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', async (message) => {
    if (message.author.bot) return;

    if (message.content.toLowerCase() === 'lec') {
        message.reply('yo');
    }
});

client.login(functions.config().discord.token);