import { Message } from 'discord.js';
import { DiscordEvent, EventHandler } from '../lib/EventManager';

@DiscordEvent('messageDelete')
class deleteEvent implements EventHandler {
  constructor() {
    this.execute = this.execute.bind(this);
  }
  execute(message: Message) {
    console.log(
      `${message.author.username} deleted message: ${message.content}`,
    );
  }
}

export default deleteEvent;
