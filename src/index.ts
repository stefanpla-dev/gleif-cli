// console.log("hello world");
import { searchByName } from "./gleif.js";

async function main() {
    if (process.argv.length < 3) {
        console.error("Usage: tsx src/index.ts <legal-name>");
        process.exit(1);
    } else {
        console.log(`Searching for LEI records with legal name: ${process.argv[2]}`);
        const records = await searchByName(process.argv[2]!);
        console.log(records);
    }

}

main();

