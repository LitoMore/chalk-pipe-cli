#!/usr/bin/env node
'ust strict';

const chalkPipe = require('chalk-pipe');
const meow = require('meow');

const cli = meow(`
	Usage
		$ chalk-pipe <stylePipe> <text> [moreText...]

	Examples
		$ chalk-pipe orange.bold Unicorn Approved!
		$ chalk-pipe 'bgBlue.#ffffff.underline' Hello World
`);

if (cli.input.length < 2) {
	console.log('Input required');
} else {
	const styles = cli.input[0];
	const text = cli.input.slice(1).join(' ');

	console.log(chalkPipe(styles)(text));
}
