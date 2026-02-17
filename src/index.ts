import { Command } from 'commander';
import { searchByName } from './gleif.js';
import * as readline from 'readline';
import Table from 'cli-table3';

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

const program = new Command();

program
    .name('gleif-cli')
    .description('Search the GLEIF API for LEI records')
    .argument('<legal-name>', 'Legal name to search for')
    .action(async (legalName: string) => {
        console.log(`Searching for LEI records with legal name: ${legalName}`);
        const records = await searchByName(legalName);
        const table = new Table({
            head: ['#', 'Legal Name', 'LEI', 'Status'],
        });

        records.forEach((record, i) => {
            table.push([i+1, record.legalName, record.lei, record.status]);
        })
        console.log(table.toString());

        const answer = await prompt('Enter the number corresponding to the desired entity: ');
        const index = parseInt(answer) - 1;
        if (isNaN(index) || index < 0 || index >= records.length) {
            console.error('Invalid selection.');
            process.exit(1);
        }
        const detailTable = new Table();
        detailTable.push(
            { 'Legal Name': records[index]!.legalName },
            { 'LEI': records[index]!.lei },
            { 'Status': records[index]!.status }
        );
        console.log(detailTable.toString());
    });

program.parse();

