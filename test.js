
import test from 'ava';
import {execa} from 'execa';

test('chalk-pipe', async t => {
	const {stdout} = await execa('./cli.js', []);
	t.is(stdout, 'Input required');
});

test('chalk-pipe blue.underline', async t => {
	const {stdout} = await execa('./cli.js', ['blue.underline']);
	t.is(stdout, 'Input required');
});

test('chalk-pipe blue.underline link', async t => {
	const {stdout} = await execa('./cli.js', ['blue.underline', 'link']);
	t.is(stdout, 'link');
});

test('chalk-pipe orange.bold Unicorn Approved', async t => {
	const {stdout} = await execa('./cli.js', ['orange.bold', 'Unicorn', 'Approved']);
	t.is(stdout, 'Unicorn Approved');
});
