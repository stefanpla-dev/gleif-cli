// console.log("hello world");
import { searchByName } from "./gleif.js";

async function main() {
    const records = await searchByName('Apple');
    console.log(records);
}

main();

