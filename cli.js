#!/usr/bin/env node
import chalkPipe from 'chalk-pipe';
import meow from 'meow';

const cli = meow(`
	Usage
		$ chalk-pipe <stylePipe> <text> [moreText...]

	Examples
		$ chalk-pipe orange.bold Unicorn Approved!
		$ chalk-pipe 'bgBlue.#ffffff.underline' Hello World
`, {
	importMeta: import.meta,
});

if (cli.input.length < 2) {
	console.log('Input required');
} else {
	const styles = cli.input[0];
	const text = cli.input.slice(1).join(' ');
	console.log(chalkPipe(styles)(text));
}
