# Discord.js with typescript boilerplate

## About

The purpose of this repository is to provide an example of how to use [discord.js](https://discord.js.org) with [typescript](https://www.typescriptlang.org/).

## Project Stack

- Node.js
- Typescript
- Discord.js

## Usage

```
git clone https://github.com/lukekeum/Discord-ts-boilerplate.git
cd Discord-ts-boilerplate
yarn (OR) npm install
yarn dev (OR) npm run dev
```

Make sure put your discord bot token inside .env and .env.development file before you run 'dev' script.

## CommandManager

You can declare your own command easily in this boilerplate

Make sure you should use arrow function or bind(this) to use "this" in function.

> **Warning**
> You should make your command file inside the `src/commands` folder

**src/commands/hello.ts**

```javascript
import { Command, CommandManager, ICommand } from '../lib/CommandManager';

@Command(['hello', 'h1'])
class testCommand implements CommandManager {
  public execute = ({ message, args }: ICommand) => {
    message.reply('hi, bro');
  }
}

export default testCommand;
```

put your command inside that array ( aliases also ).

## EventHandler

You can also declare your own events easily in this boilerplate

Make sure you should use arrow function or bind(this) to use "this" in function.

> **Warning**
> You should make your event file inside `src/events` folder

**src/events/example.ts**

```javascript
import { MessageReaction, User } from 'discord.js';
import { DiscordEvent, EventHandler } from '../lib/EventManager';

@DiscordEvent('messageReactionAdd')
class example implements EventHandler {
  public execute = (messageReact: MessageReaction, user: User) => {
    console.log(messageReaction.count);
    console.log(user.username);
  }
}

export default example;
```

put your event-type inside that `@DiscordEvent()`.
