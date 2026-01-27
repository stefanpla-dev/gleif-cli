// console.log("hello world");

async function main() {
    const response = await fetch("https://api.gleif.org/api/v1/lei-records?filter[entity.legalName]=Apple");
    const data = response.json(); 
    console.log(data);

}

main();

