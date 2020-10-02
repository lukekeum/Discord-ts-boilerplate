import { Command, CommandManager, ICommand } from '../lib/CommandManager';

@Command(['hello', 'h1'])
class testCommand extends CommandManager {
  execute({ message, args }: ICommand) {
    message.reply('hi, bro');
  }
}

module.exports = {
  class: new testCommand(),
};
