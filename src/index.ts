import './env';
import client from './client';
import { readdirSync } from 'fs';
import Discord from 'discord.js';

const commands = new Discord.Collection<string, Function>();

const token = process.env.TOKEN || '';
const prefix = process.env.PREFIX || '::';
const commandFiles = readdirSync('./src/commands').filter((file) =>
  file.endsWith('.ts'),
);
const eventFiles = readdirSync('./src/events').filter((file) =>
  file.endsWith('.ts'),
);

for (const file of commandFiles) {
  const commandClass = require(`./commands/${file}`).default;
  const { command, execute } = new commandClass();
  if (typeof command === 'string') {
    commands.set(command, execute);
    continue;
  }
  for (const cmd of command) {
    commands.set(cmd, execute);
  }
}

client.on('ready', () => {
  console.log('Bot is running');
});

// client.on('message', async (message) => {
//   if (!message.content.startsWith(prefix) || message.author.bot) return;

//   const args = message.content.slice(prefix.length).trim().split(/ +/);
//   const command = args.shift().toLowerCase();

//   if (!commands.has(command)) {
//     return;
//   }

//   try {
//     await commands.get(command)({ message, args });
//   } catch (err) {
//     console.error(err);
//     message.reply('An error occurred while processing the command.');
//   }
// });

for (const file of eventFiles) {
  const eventClass = require(`./events/${file}`).default;
  const { eventType, execute } = new eventClass();
  console.log(eventType, execute);
  client.on(eventType, execute);
}

client.login(token);
