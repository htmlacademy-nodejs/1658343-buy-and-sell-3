"use strict";

const {Cli} = require(`./cli`);
const chalk = require(`chalk`);

const {DEFAULT_COMMAND, USER_ARGV_INDEX, ExitCode} = require(`./constants`);

const userArguments = process.argv.slice(USER_ARGV_INDEX);
const [userCommand] = userArguments;

const count = userArguments.slice(1);

if (+count > 1000) {
  console.error(chalk.red(`Не больше 1000 объявлений`));
  return process.exit(ExitCode.error);
}

if (userArguments.length === 0 || !Cli[userCommand]) {
  Cli[DEFAULT_COMMAND].run();
  process.exit(ExitCode.success);
}

return Cli[userCommand].run(count);

