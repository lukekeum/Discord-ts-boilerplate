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
사용방법

@Command("명령어( string[] 형태로 적어도 됨 )")
class 클래스명 extends CommandManager <- 버그방지 {
  execute({ message, args }: ICommand) {
    
  }
}

module.exports = {
  class: class;
}

*/
