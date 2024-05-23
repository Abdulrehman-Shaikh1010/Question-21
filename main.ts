// Create an array of objects containing information about different countries
let countriesInfo: { name: string, capital: string, population: number, language: string }[] = [
    {
        name: "United States",
        capital: "Washington, D.C.",
        population: 331449281,
        language: "English"
    },
    {
        name: "France",
        capital: "Paris",
        population: 65273511,
        language: "French"
    },
    {
        name: "China",
        capital: "Beijing",
        population: 1444216107,
        language: "Chinese"
    },
    {
        name: "Brazil",
        capital: "Brasília",
        population: 213993437,
        language: "Portuguese"
    }
];

// Print information about each country
console.log("Information about Different Countries:");
for (let i = 0; i < countriesInfo.length; i++) {
    console.log(`Country: ${countriesInfo[i].name}`);
    console.log(`Capital: ${countriesInfo[i].capital}`);
    console.log(`Population: ${countriesInfo[i].population}`);
    console.log(`Official Language: ${countriesInfo[i].language}`);
    console.log("--------------------------");
}
