import { Message } from 'discord.js';
import { DiscordEvent, EventHandler } from '../lib/EventManager';

@DiscordEvent('messageDelete')
class deleteEvent implements EventHandler {
  execute(message: Message) {
    console.log(
      `${message.author.username} deleted message: ${message.content}`,
    );
  }
}

export default deleteEvent;
