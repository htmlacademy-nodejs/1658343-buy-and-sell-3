"use strict";

const {Cli} = require(`./cli`);

const {DEFAULT_COMMAND, USER_ARGV_INDEX} = require(`./constants`);

const [commandName, ...args] = process.argv.slice(USER_ARGV_INDEX);
const command = Cli[commandName] || Cli[DEFAULT_COMMAND];

return command.run(...args);
