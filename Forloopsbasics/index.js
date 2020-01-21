const names = [
    "George Walker Bush",
    "Angela Merkel",
    "Alexander Boris de Pfeffel Johnson",
];

//const numberofnames = names.length;
//console.log(numberofnames)

for (let name of names) {
    const splitnames = name.split(" ");

    const firstnames = splitnames[0];
    console.log(firstnames);
    const lastnames = splitnames[splitnames.length -1]
    console.log(lastnames);
    const numberofnames = splitnames.length
    console.log(numberofnames)
    const lengthofname = name.length - splitnames.length + 1
    console.log(lengthofname)

    if (numberofnames > 2) {
        console.log("Middlenamer, for sure!");
        }
        
    else {
        console.log("Middlenamer, no way");
    };
}


















  