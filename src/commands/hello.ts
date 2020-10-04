import { Command, CommandManager, ICommand } from '../lib/CommandManager';

@Command(['hello', 'hi'])
class example implements CommandManager {
  execute({ message, args }: ICommand) {
    message.reply('hi, bro');
  }
}

export default example;
