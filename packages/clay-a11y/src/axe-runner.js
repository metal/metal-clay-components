import fs from 'fs';
import path from 'path';
import yargs from 'yargs';
import { exec } from './axe-driver';

const argv = require('yargs')
	.usage('Usage: $0 [options]')
	.example('$0 --content demo/index.html', 'Executes the accessibility tests')
	.example(
		'$0 --c demo/index.html -r /var/www/',
		'Executes the accessibility tests',
	)
	.nargs('content', 1)
	.describe(
		'content',
		'Specifies relatively to the current directory or given -root where the testable content is hosted',
	)
	.nargs('root', 1)
	.describe('root', 'Specifies the document root of the test server')
	.help('h')
	.version()
	.alias('h', 'help')
	.alias('v', 'version')
	.alias('r', 'root')
	.alias('c', 'content').argv;

const appDirectory = fs.realpathSync(process.cwd());
const indexHtml = argv.content || 'demos/index.html';
const serverPath = path.resolve(argv.root || appDirectory);

exec({
	indexHtml,
	serverPath,
});
