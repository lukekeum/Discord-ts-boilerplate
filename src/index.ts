import './env';
import client from './client';

const token = process.env.TOKEN || '';

client.login(token).then(() => {
  console.log(`Bot is running!`);
});
