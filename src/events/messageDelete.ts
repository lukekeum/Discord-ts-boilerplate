import { Message } from 'discord.js';
import { DiscordEvent } from '../lib/EventManager';

@DiscordEvent('messageDelete')
class deleteEvent {
  execute(message: Message) {
    console.log(`${message.author} deleted message: ${message.content}`);
  }
}

module.exports = {
  class: new deleteEvent(),
};
