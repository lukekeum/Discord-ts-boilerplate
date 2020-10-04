import { MessageReaction, User } from 'discord.js';
import { DiscordEvent, EventHandler } from '../lib/EventManager';

@DiscordEvent('messageReactionAdd')
class example implements EventHandler {
  execute(messageReaction: MessageReaction, user: User) {
    console.log(messageReaction.count);
    console.log(user.username);
  }
}

export default example;
