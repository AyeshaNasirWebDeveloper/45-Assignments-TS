//ASSIGNMENT NO.02

let personName: string = "Eric";
console.log(`Hello ${personName}, would you like to learn some Python today?`);


//ASSIGNMENT NO.03

let pName: string = "John Doe";

console.log("Lowercase:", pName.toLowerCase());
console.log("Uppercase:", pName.toUpperCase());
console.log("Titlecase:", toTitleCase(pName));

function toTitleCase(str: string): string {
    return str.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
}


//ASSIGNMENT NO.04

let quote: string = "A person who never made a mistake never tried anything new.";
let author: string = "Albert Einstein";

console.log(`${author} once said, "${quote}"`);


//ASSIGNMENT NO.05

let famous_person: string = "Albert Einstein";
let Quote: string = "A person who never made a mistake never tried anything new.";
let message: string = `${famous_person} once said, "${quote}"`;

console.log(message);


//ASSIGNMENT NO.06

let whiteSpace: string = "\t\n   John Doe   \n\t";
console.log("Name with whitespace:", whiteSpace);

let stripped: string = whiteSpace.trim();
console.log("Stripped name:", stripped);


//ASSIGNMENT NO.07

console.log("Addition:", 5 + 3);
console.log("Subtraction:", 10 - 2);
console.log("Multiplication:", 4 * 2);
console.log("Division:", 16 / 2);


//ASSIGNMENT NO.08

console.log(4 + 4);
console.log(10 - 2);
console.log(2 * 4);
console.log(16 / 2);


//ASSIGNMENT NO.09

let favoriteNumber: number = 5;
let Message: string = `My favorite number is ${favoriteNumber}.`;

console.log(Message);


//ASSIGNMENT NO.10

// Program: Famous Quote
// Name: Ayesha Nasir
// Date: 14 February 2024
//Program Description: This script defines a famous quote and its corresponding author, stores them in variables and then displays the quote with the author's name.

let famousPerson: string = "Albert Einstein";
let fQuote: string = "A person who never made a mistake never tried anything new.";
let massage: string = `${famousPerson} once said, "${fQuote}"`;

console.log(massage);

// Program: Number
// Name: Ayesha Nasir
// Date: 14 February 2024
//Program Description: This program demonstrates basic arithmetic operations—addition, subtraction, multiplication, and division—where the result of each operation is 8.

console.log(4 + 4);
console.log(10 - 2);
console.log(2 * 4);
console.log(16 / 2);


//ASSIGNMENT NO.11

let friendNames: string[] = ["Sidra", "Muntaha", "Rahat", "Uroosa", "Ayesha"];

for (let i = 0; i < friendNames.length; i++) {
    console.log(friendNames[i]);
}


//ASSIGNMENT NO.12

let names: string[] = ["Uroosa", "Ayesha", "Sidra", "Muntaha", "Rahat"];
let greetingMessage: string = "Asalaam O Alikum, ";

for (let i = 0; i < names.length; i++) {
    console.log(greetingMessage + names[i] + "!");
}


//ASSIGNMENT NO.13

let transportationModes: string[] = ["Swift", "Honda", "Toyota", "Corolla", "Suzuki"];

for (let i = 0; i < transportationModes.length; i++) {
    console.log("I would like to own a " + transportationModes[i] + ".");
}


//ASSIGNMENT NO.14

let guestList: string[] = ["Amna", "Shafia", "Faiza"];

for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]}, Join us for a delectable evening filled with good food, great company, and unforgettable moments. Your presence would make our dinner complete.`);
}


//ASSIGNMENT NO.15

let gList: string[] = ["Amna", "Shafia", "Faiza"];

for (let i = 0; i < gList.length; i++) {
    console.log(`Dear ${gList[i]}, Join us for a delicious dinner filled with good food, great company, and unforgettable moments. Your presence would make the evening complete.
    `);
}
console.log(`${gList[1]} can't make it to the dinner.`);

gList[1] = "Ayesha";

for (let i = 0; i < gList.length; i++) {
    console.log(`Dear ${gList[i]}, Join us for a delicious dinner filled with good food, great company, and unforgettable moments. Your presence would make the evening complete.`);
}


//ASSIGNMENT NO.16

let guestL: string[] = ["Amna", "Shafia", "Faiza"];

for (let i = 0; i < guestL.length; i++) {
    console.log(`Dear ${guestL[i]}, Join us for a delicious dinner filled with good food, great company, and unforgettable moments. Your presence would make the evening complete.`);
}
console.log("Good news! We found a bigger dinner table.");

guestL.unshift("Asiaa");
guestL.splice(Math.floor(guestL.length / 2), 0, "Jaweria");
guestL.push("Mahrukh");

for (let i = 0; i < guestL.length; i++) {
    console.log(`Dear ${guestL[i]}, Join us for a delicious dinner filled with good food, great company, and unforgettable moments. Your presence would make the evening complete.`);
}


//ASSIGNMENT NO.17

let guestLis: string[] = ["Faiza", "Ayesha", "Amna", "Shafia", "Asiaa", "Jaweria"];

for (let i = 0; i < guestLis.length; i++) {
    console.log(`Dear ${guestLis[i]}, Join us for a delicious dinner filled with good food, great company, and unforgettable moments. Your presence would make the evening complete.`);
}

console.log("Unfortunately, the new dinner table won't arrive in time, so we can only invite two people for dinner.");

while (guestLis.length > 2) {
    let removedGuest = guestLis.pop();
    console.log(`Sorry ${removedGuest}, we can't invite you to dinner.`);
}

for (let i = 0; i < guestLis.length; i++) {
    console.log(`Dear ${guestLis[i]}, you're still invited to dinner.`);
}

guestLis.pop();
guestLis.pop();

console.log("Guest list:", guestLis);


//ASSIGNMENT NO.18

let placesToVisit: string[] = ["Pakistan", "USA", "Afghanistan", "Asia", "India"];
console.log("Original order:", placesToVisit);
console.log("Alphabetical order:", [...placesToVisit].sort());
console.log("Original order:", placesToVisit);
console.log("Reverse alphabetical order:", [...placesToVisit].sort().reverse());
console.log("Original order:", placesToVisit);

placesToVisit.reverse();
console.log("Reversed order:", placesToVisit);

placesToVisit.reverse();
console.log("Original order:", placesToVisit);

placesToVisit.sort();
console.log("Sorted in alphabetical order:", placesToVisit);

placesToVisit.sort().reverse();
console.log("Sorted in reverse alphabetical order:", placesToVisit);


//ASSIGNMENT NO.19

let guesList: string[] = ["Faiza", "Ayesha", "Amna", "Shafia", "Asiaa", "Jaweria"];

for (let i = 0; i < guesList.length; i++) {
    console.log(`Dear ${guesList[i]}, Join us for a delicious dinner filled with good food, great company, and unforgettable moments. Your presence would make the evening complete.`);
}

console.log(`We are inviting ${guesList.length} people to dinner.`);


//ASSIGNMENT NO.20

let programmingLanguages: string[] = ["HTML", "CSS", "JavaScript", "Python", "Java", "C++", "TypeScript", "Rust"];
console.log("List of programming languages:");

for (let i = 0; i < programmingLanguages.length; i++) {
    console.log(programmingLanguages[i]);
}


//ASSIGNMENT NO.21

let countries: { [key: string]: { capital: string, population: number, language: string } } = {
    "USA": { capital: "Washington D.C.", population: 331002651, language: "English" },
    "China": { capital: "Beijing", population: 1439323776, language: "Mandarin" },
    "India": { capital: "New Delhi", population: 1380004385, language: "Hindi" },
    "Germany": { capital: "Berlin", population: 3577000, language: "German" },
    "Russia": { capital: "Moscow", population: 145934462, language: "Russian" }
};

console.log("Information about different countries:");

for (let country in countries) {
    console.log(`${country}:`);
    console.log(`  Capital: ${countries[country].capital}`);
    console.log(`  Population: ${countries[country].population}`);
    console.log(`  Language: ${countries[country].language}`);
}


//ASSIGNMENT NO.22

let fruits: string[] = ["Apple", "Banana", "Orange"];
console.log(fruits[3]);
console.log(fruits[2]);


//ASSIGNMENT NO.23

let age = 25;
let temperature = 20;
let isRaining = true;
let isSunny = false;
let day = 'Tuesday';

console.log("Is age >= 18? I predict True.");
console.log(age >= 18);

console.log("Is temperature < 30? I predict True.");
console.log(temperature < 30);

console.log("Is it raining? I predict True.");
console.log(isRaining);

console.log("Is it sunny? I predict False.");
console.log(isSunny);

console.log("Is it Monday? I predict False.");
console.log(day == 'Monday');

console.log("Is age < 21? I predict True.");
console.log(age < 21);

console.log("Is temperature > 25? I predict False.");
console.log(temperature > 25);

console.log("Is it not raining? I predict False.");
console.log(!isRaining);

console.log("Is it not sunny? I predict True.");
console.log(!isSunny);

console.log("Is it Tuesday? I predict True.");
console.log(day == 'Tuesday');


//ASSIGNMENT NO.24

let fruit = 'apple';
console.log("Is fruit == 'apple'? I predict True.");
console.log(fruit == 'apple');

let animal = 'lion';
console.log("Is animal != 'tiger'? I predict True.");
console.log(animal != 'tiger');

let cityName = 'New York';
console.log("Is cityName.toLowerCase() == 'new york'? I predict True.");
console.log(cityName.toLowerCase() == 'new york');

let month = 'April';
console.log("Is month.toLowerCase() != 'april'? I predict False.");
console.log(month.toLowerCase() != 'april');

let num1 = 10;
let num2 = 5;

console.log("Is num1 > num2? I predict True.");
console.log(num1 > num2);

console.log("Is num1 <= num2? I predict False.");
console.log(num1 <= num2);

let isWeekend = true;
let isHoliday = false;

console.log("Is it a weekend and a holiday? I predict False.");
console.log(isWeekend && isHoliday);

console.log("Is it a weekend or a holiday? I predict True.");
console.log(isWeekend || isHoliday);

let colors = ['red', 'blue', 'green', 'yellow'];

console.log("Is 'blue' in the colors array? I predict True.");
console.log(colors.includes('blue'));

console.log("Is 'black' not in the colors array? I predict True.");
console.log(!colors.includes('black'));


//ASSIGNMENT NO.25

let alien$Color: string = 'green';

if (alien$Color === 'green') {
    console.log("Congratulations! You just earned 5 points.");
}

let alienColor: string = 'yellow';
if (alienColor === 'green') {
    console.log("Congratulations! You just earned 5 points.");
}


//ASSIGNMENT NO.26

let alien_Color: string = 'green';

if (alien_Color === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the alien.");
} else {
    console.log("Congratulations! You just earned 10 points for shooting the alien.");
}

let alien_color: string = 'yellow';

if (alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the alien.");
} else {
    console.log("Congratulations! You just earned 10 points for shooting the alien.");
}


//ASSIGNMENT NO.27

let Alien_color: string = 'green';

if (Alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
} else if (Alien_color === 'yellow') {
    console.log("Congratulations! You just earned 10 points for shooting the yellow alien.");
} else if (Alien_color === 'red') {
    console.log("Congratulations! You just earned 15 points for shooting the red alien.");
}

let Alien_Color: string = 'yellow';

if (Alien_Color === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
} else if (Alien_Color === 'yellow') {
    console.log("Congratulations! You just earned 10 points for shooting the yellow alien.");
} else if (Alien_Color === 'red') {
    console.log("Congratulations! You just earned 15 points for shooting the red alien.");
}

let alienColor123: string = 'red';

if (alienColor123 === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
} else if (alienColor123 === 'yellow') {
    console.log("Congratulations! You just earned 10 points for shooting the yellow alien.");
} else if (alienColor123 === 'red') {
    console.log("Congratulations! You just earned 15 points for shooting the red alien.");
}


//ASSIGNMENT NO.28

let personAge: number = 30;

if (personAge < 2) {
    console.log("The person is a baby.");
} else if (personAge >= 2 && personAge < 4) {
    console.log("The person is a toddler.");
} else if (personAge >= 4 && personAge < 13) {
    console.log("The person is a kid.");
} else if (personAge >= 13 && personAge < 20) {
    console.log("The person is a teenager.");
} else if (personAge >= 20 && personAge < 65) {
    console.log("The person is an adult.");
} else {
    console.log("The person is an elder.");
}


//ASSIGNMENT NO.29

let favorite_fruits: string[] = ["apple", "banana", "strawberry"];

if (favorite_fruits.includes("apple")) {
    console.log("You really like apples!");
}

if (favorite_fruits.includes("banana")) {
    console.log("You really like bananas!");
}

if (favorite_fruits.includes("strawberry")) {
    console.log("You really like strawberries!");
}

if (favorite_fruits.includes("orange")) {
    console.log("You really like oranges!");
}

if (favorite_fruits.includes("grape")) {
    console.log("You really like grapes!");
}


//ASSIGNMENT NO.30

let user_names: string[] = ["admin", "Ayesha", "Uroosa", "Sadia", "Fariha"];
for (let username of user_names) {
    if (username === 'admin') {
        console.log('Hello admin, would you like to see a status report?');
    } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}


//ASSIGNMENT NO.31

let usernames: string[] = [];

if (usernames.length > 0) {
    for (let username of usernames) {
        if (username === 'admin') {
            console.log("Hello admin, would you like to see a status report?");
        } else {
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    }
} else {
    console.log("We need to find some users!");
}


//ASSIGNMENT NO.32

let current_users: string[] = ["Sara", "Salma", "Shazia", "Shagufta", "Shabnam"];
let new_users: string[] = ["Shaheen", "Shakeela", "Sadia", "Sofia", "Saima"];
let current_users_lower: string[] = current_users.map(username => username.toLowerCase());

for (let new_user of new_users) {
    let new_user_lower = new_user.toLowerCase();

    if (current_users_lower.includes(new_user_lower)) {
        console.log(`The username '${new_user}' is not available. Please enter a new username.`);
    } else {
        console.log(`The username '${new_user}' is available.`);
    }
}


//ASSIGNMENT NO.33

let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let number of numbers) {
    if (number === 1) {
        console.log(`${number}st`);
    } else if (number === 2) {
        console.log(`${number}nd`);
    } else if (number === 3) {
        console.log(`${number}rd`);
    } else {
        console.log(`${number}th`);
    }
}


//ASSIGNMENT NO.34

let favorite_Pizzas: string[] = ["Pepperoni", "Margherita", "Supreme"];

for (let pizza of favorite_Pizzas) {
    console.log(`I like ${pizza} pizza.`);
}

console.log("I really love pizza!");


//ASSIGNMENT NO.35

let animals: string[] = ["Dog", "Cat", "Rabbit"];

for (let animal of animals) {
    console.log(`A ${animal.toLowerCase()} would make a great pet.`);
}

console.log("Any of these animals would make a great pet!");


//ASSIGNMENT NO.36

function make_shirt(size: string, message: string): void {
    console.log(`The shirt size is ${size.toUpperCase()} and it will have the message: "${message}".`);
}

make_shirt('medium', 'Hello, World!');


//ASSIGNMENT NO.37

function makeShirt(size: string = 'large', message: string = 'I love TypeScript'): void {
    console.log(`The shirt size is ${size.toUpperCase()} and it will have the message: "${message}".`);
}

makeShirt();
makeShirt('medium');
makeShirt('small', 'JavaScript is awesome!');


//ASSIGNMENT NO.38

function describe_city(city: string, country: string = 'Unknown'): void {
    console.log(`${city} is in ${country}.`);
}

describe_city('Karachi', 'Pakistan');
describe_city('New York', 'USA');
describe_city('Paris');


//ASSIGNMENT NO.39

function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}

console.log(city_country('Lahore', 'Pakistan'));
console.log(city_country('Tokyo', 'Japan'));
console.log(city_country('Paris', 'France'));


//ASSIGNMENT NO.40

function make_album(artist: string, title: string, tracks?: number): { artist: string, title: string, tracks?: number } {
    let album:
        { artist: string, title: string, tracks?: number } = {
        artist: artist,
        title: title
    };

    if (tracks !== undefined) {
        album.tracks = tracks;
    }

    return album;
}

let album1 = make_album('Artist 1', 'Album 1');
let album2 = make_album('Artist 2', 'Album 2', 12);
let album3 = make_album('Artist 3', 'Album 3');

console.log(album1);
console.log(album2);
console.log(album3);



//ASSIGNMENT NO.41

function showMagicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

let magicianNames: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];

showMagicians(magicianNames);


//ASSIGNMENT NO.42

function showmagicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

function makeGreat(magicians: string[]): string[] {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = `the Great ${magicians[i]}`;
    }
    return magicians;
}

let magician_name: string[] = ["Asif Shah", "Sabir Ali", "Sultan", "Shoukat Hameed"];
let greatMagicians = makeGreat(magician_name);

showmagicians(greatMagicians);


//ASSIGNMENT NO.43

function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

function make_great(magicians: string[]): string[] {
    let modified_magicians: string[] = [];
    for (let magician of magicians) {
        modified_magicians.push(`the Great ${magician}`);
    }
    return modified_magicians;
}

let magician_names: string[] = ["Asif Shah", "Sabir Ali", "Sultan", "Shoukat Hameed"];

let great_magicians = make_great([...magician_names]);

console.log("Original Magicians:");
show_magicians(magician_names);

console.log("\nGreat Magicians:");
show_magicians(great_magicians);


//ASSIGNMENT NO.44

function order_sandwich(...items: string[]): void {
    console.log("Making sandwich with the following items:");
    for (let item of items) {
        console.log("- " + item);
    }
    console.log("Enjoy your sandwich!\n");
}

order_sandwich("Turkey", "Lettuce", "Tomato", "Mayo");
order_sandwich("Ham", "Cheese");
order_sandwich("Peanut Butter", "Jelly", "Banana");


//ASSIGNMENT NO.45

function store_car_info(manufacturer: string, model: string, ...options: { [key: string]: any }[]): { manufacturer: string, model: string, [key: string]: any } {
    let car_info: { manufacturer: string, model: string, [key: string]: any } = {
        manufacturer: manufacturer,
        model: model
    };

    for (let option of options) {
        for (let key in option) {
            car_info[key] = option[key];
        }
    }

    return car_info;
}

let car = store_car_info('Toyota', 'Corolla', { color: 'Red' }, { year: 2024 });

console.log(car);
