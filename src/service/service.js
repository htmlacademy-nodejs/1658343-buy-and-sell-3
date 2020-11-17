"use strict";

const {Cli} = require(`./cli`);
const chalk = require(`chalk`);

const {DEFAULT_COMMAND, USER_ARGV_INDEX, ExitCode} = require(`./constants`);

const [commandName, ...args] = process.argv.slice(USER_ARGV_INDEX);
const command = Cli[commandName] || Cli[DEFAULT_COMMAND];

const [count] = args;

if (+count > 1000) {
  console.error(chalk.red(`Не больше 1000 объявлений`));
  return process.exit(ExitCode.error);
}

return command.run(...args);
