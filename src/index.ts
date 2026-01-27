import { searchByName } from "./gleif.js";
import * as readline from 'readline';

function prompt(question: string): Promise<string> {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            rl.close();
            resolve(answer);
        });
    });
}

async function main() {
    if (process.argv.length < 3) {
        console.error("Usage: tsx src/index.ts <legal-name>");
        process.exit(1);
    } else {
        console.log(`Searching for LEI records with legal name: ${process.argv[2]}`);
        const records = await searchByName(process.argv[2]!);
        records.forEach((record, i) => {
            console.log(`${i + 1}. ${record.legalName} (${record.lei}) - ${record.status}`);
            // Eventually format the output as a table.
        })
        const answer = await prompt('Enter the number corresponding to the desired entity: ');
        const index = parseInt(answer) - 1;
        if (isNaN(index) || index < 0 || index >= records.length) {
            console.error("Invalid selection.");
            process.exit(1);
        }
        console.log('You selected:', records[index]);
    }
}

main();

