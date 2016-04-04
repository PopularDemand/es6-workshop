// we'll use the core readline library to write our CLI
import * as readline from 'readline';
import search from './search';
const http = require('http'); // let's pull in http to talk to Bandisintown

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function main () {
	rl.question('What would you like to do > ', command => {
		switch (command) {
			case 'search':
				search(rl, main);
				break;
			default:
				console.log('Not a valid command');
				main();
		}
	});
}

// invoke main to kick off our app
main();