// Create an array of objects containing information about different countries
var countriesInfo = [
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
for (var i = 0; i < countriesInfo.length; i++) {
    console.log("Country: ".concat(countriesInfo[i].name));
    console.log("Capital: ".concat(countriesInfo[i].capital));
    console.log("Population: ".concat(countriesInfo[i].population));
    console.log("Official Language: ".concat(countriesInfo[i].language));
    console.log("--------------------------");
}
