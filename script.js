
const array = [
    { name: "N. Armstrong", profession: "spacecowboy", age: 89 },
    { name: "H. de Haan", profession: "kippen hypnotiseur", age: 59 },
    { name: "A. Curry", profession: "kikvorsman", age: 32 },
    { name: "F. Vonk", profession: "slangenmelker", age: 36 },
    { name: "B. Bunny", profession: "konijnen uitlaatservice", age: 27 },
    { name: "Dr.Evil", profession: "digital overlord", age: 56 }
];

for (let person of array) {
    //deel 1
    console.log("Dit is persoon:", person);
    //deel 2
    console.log("Dit is zijn naam:", person.name);
    //deel 3
    let dateOfBirth = (2020 - person.age)
    console.log("Dit is zijn geboortedatum:", dateOfBirth);
    //deel 4
    console.log(person.name, " zijn beroep is: ", person.profession);
    //deel 5
    if (person.age > 50) {
        console.log(person.name, " is ouder dan 50! ")
    }
    else {
        console.log(person.name, " is niet ouder dan 50! ")
    }

}

