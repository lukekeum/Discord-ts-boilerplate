import { Command, CommandManager, ICommand } from '../lib/CommandManager';

@Command('ping')
class testCommand extends CommandManager {
  execute({ message, args }: ICommand) {
    message.reply('pong');
  }
}

module.exports = {
  class: new testCommand(),
};
