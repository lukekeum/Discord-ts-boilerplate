import { Command, CommandManager, ICommand } from '../lib/CommandManager';

@Command('ping')
class testCommand implements CommandManager {
  execute({ message, args }: ICommand) {
    message.reply('pong');
  }
}

export default testCommand;
