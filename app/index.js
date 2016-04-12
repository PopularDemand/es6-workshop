// we'll use the core readline library to write our CLI
import * as readline from 'readline';
import search from './search';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function prompt (ques) {
	return new Promise((resolve, reject) => {
		rl.question(ques, command => {
			if (!command) reject('No command given.');
			resolve(command);
		});
	});
}

function main () {
	prompt('What would you like to do > ')
		.then(command => {
			switch (command) {
				case 'search':
					search(rl, main);
					break;
				default:
					console.log('Not a valid command');
					main();
			}
	})
	.catch(err => console.log(err));
}

console.log("Welcome to ConcertGoer!");
// invoke main to kick off our app
main();