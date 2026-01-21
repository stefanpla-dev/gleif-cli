// console.log("hello world");

async function main () {
    const response = await fetch("https://api.gleif.org/api/v1/lei-records?filter[entity.legalName]=Apple ")
    const data = await response.json();
    console.log(data);
}

main ();


// This should be in two parts: one part that takes the commands and another that is a library that makes calls to the API. This second part can be as little as two files.