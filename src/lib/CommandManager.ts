import { Message } from 'discord.js';

type IArgument = string[] | null;
type ICmd = string[] | string;

export interface ICommand {
  message: Message;
  args: IArgument;
}

export function Command(command: ICmd) {
  return function (consturctFN: Function) {
    consturctFN.prototype.command = command;
  };
}

export class CommandManager {
  execute({ message, args }: ICommand) {
    return;
  }
}

/*
useage

@Command("command( you can use as string[] also )")
class (classname) extends CommandManager <- optional {
  execute({ message, args }: ICommand) {
    
  }
}

module.exports = {
  class: class;
}

*/
