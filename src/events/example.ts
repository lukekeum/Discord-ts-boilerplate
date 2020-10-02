import { MessageReaction, User } from 'discord.js';
import { DiscordEvent } from '../lib/EventManager';

@DiscordEvent('messageReactionAdd')
class example {
  execute(messageReaction: MessageReaction, user: User) {
    console.log(messageReaction.count);
    console.log(user.username);
  }
}

module.exports = {
  class: new example(),
};
