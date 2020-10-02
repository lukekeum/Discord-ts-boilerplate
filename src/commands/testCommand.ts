import { Command, CommandManager, ICommand } from '../lib/CommandManager';

@Command('안녕')
class testCommand extends CommandManager {
  execute({ message, args }: ICommand) {
    message.reply('안녕');
  }
}

module.exports = {
  class: new testCommand(),
};
