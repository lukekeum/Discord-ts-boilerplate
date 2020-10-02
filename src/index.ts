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

for (const file of commandFiles) {
  const commandClass = require(`./commands/${file}`);
  const { command, execute } = commandClass.class;
  if (typeof command === 'string') {
    commands.set(command, execute);
    continue;
  }
  for (const cmd of commandClass.class.command) {
    commands.set(cmd, commandClass.class.execute);
  }
}

client.on('message', (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (!commands.has(command)) {
    return;
  }

  try {
    commands.get(command)({ message, args });
  } catch (err) {
    console.error(err);
    message.reply('명령어를 처리하는 도중 오류가 발생했습니다');
  }
});

client.login(token).then(() => {
  console.log(`Bot is running!`);
});
