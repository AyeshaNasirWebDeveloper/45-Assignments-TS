//ASSIGNMENT NO.02
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var personName = "Eric";
console.log("Hello ".concat(personName, ", would you like to learn some Python today?"));
//ASSIGNMENT NO.03
var pName = "John Doe";
console.log("Lowercase:", pName.toLowerCase());
console.log("Uppercase:", pName.toUpperCase());
console.log("Titlecase:", toTitleCase(pName));
function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
}
//ASSIGNMENT NO.04
var quote = "A person who never made a mistake never tried anything new.";
var author = "Albert Einstein";
console.log("".concat(author, " once said, \"").concat(quote, "\""));
//ASSIGNMENT NO.05
var famous_person = "Albert Einstein";
var Quote = "A person who never made a mistake never tried anything new.";
var message = "".concat(famous_person, " once said, \"").concat(quote, "\"");
console.log(message);
//ASSIGNMENT NO.06
var whiteSpace = "\t\n   John Doe   \n\t";
console.log("Name with whitespace:", whiteSpace);
var stripped = whiteSpace.trim();
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
var favoriteNumber = 5;
var Message = "My favorite number is ".concat(favoriteNumber, ".");
console.log(Message);
//ASSIGNMENT NO.10
// Program: Famous Quote
// Name: Ayesha Nasir
// Date: 14 February 2024
//Program Description: This script defines a famous quote and its corresponding author, stores them in variables and then displays the quote with the author's name.
var famousPerson = "Albert Einstein";
var fQuote = "A person who never made a mistake never tried anything new.";
var massage = "".concat(famousPerson, " once said, \"").concat(fQuote, "\"");
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
var friendNames = ["Sidra", "Muntaha", "Rahat", "Uroosa", "Ayesha"];
for (var i = 0; i < friendNames.length; i++) {
    console.log(friendNames[i]);
}
//ASSIGNMENT NO.12
var names = ["Uroosa", "Ayesha", "Sidra", "Muntaha", "Rahat"];
var greetingMessage = "Asalaam O Alikum, ";
for (var i = 0; i < names.length; i++) {
    console.log(greetingMessage + names[i] + "!");
}
//ASSIGNMENT NO.13
var transportationModes = ["Swift", "Honda", "Toyota", "Corolla", "Suzuki"];
for (var i = 0; i < transportationModes.length; i++) {
    console.log("I would like to own a " + transportationModes[i] + ".");
}
//ASSIGNMENT NO.14
var guestList = ["Amna", "Shafia", "Faiza"];
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear ".concat(guestList[i], ", Join us for a delectable evening filled with good food, great company, and unforgettable moments. Your presence would make our dinner complete."));
}
//ASSIGNMENT NO.15
var gList = ["Amna", "Shafia", "Faiza"];
for (var i = 0; i < gList.length; i++) {
    console.log("Dear ".concat(gList[i], ", Join us for a delicious dinner filled with good food, great company, and unforgettable moments. Your presence would make the evening complete.\n    "));
}
console.log("".concat(gList[1], " can't make it to the dinner."));
gList[1] = "Ayesha";
for (var i = 0; i < gList.length; i++) {
    console.log("Dear ".concat(gList[i], ", Join us for a delicious dinner filled with good food, great company, and unforgettable moments. Your presence would make the evening complete."));
}
//ASSIGNMENT NO.16
var guestL = ["Amna", "Shafia", "Faiza"];
for (var i = 0; i < guestL.length; i++) {
    console.log("Dear ".concat(guestL[i], ", Join us for a delicious dinner filled with good food, great company, and unforgettable moments. Your presence would make the evening complete."));
}
console.log("Good news! We found a bigger dinner table.");
guestL.unshift("Asiaa");
guestL.splice(Math.floor(guestL.length / 2), 0, "Jaweria");
guestL.push("Mahrukh");
for (var i = 0; i < guestL.length; i++) {
    console.log("Dear ".concat(guestL[i], ", Join us for a delicious dinner filled with good food, great company, and unforgettable moments. Your presence would make the evening complete."));
}
//ASSIGNMENT NO.17
var guestLis = ["Faiza", "Ayesha", "Amna", "Shafia", "Asiaa", "Jaweria"];
for (var i = 0; i < guestLis.length; i++) {
    console.log("Dear ".concat(guestLis[i], ", Join us for a delicious dinner filled with good food, great company, and unforgettable moments. Your presence would make the evening complete."));
}
console.log("Unfortunately, the new dinner table won't arrive in time, so we can only invite two people for dinner.");
while (guestLis.length > 2) {
    var removedGuest = guestLis.pop();
    console.log("Sorry ".concat(removedGuest, ", we can't invite you to dinner."));
}
for (var i = 0; i < guestLis.length; i++) {
    console.log("Dear ".concat(guestLis[i], ", you're still invited to dinner."));
}
guestLis.pop();
guestLis.pop();
console.log("Guest list:", guestLis);
//ASSIGNMENT NO.18
var placesToVisit = ["Pakistan", "USA", "Afghanistan", "Asia", "India"];
console.log("Original order:", placesToVisit);
console.log("Alphabetical order:", __spreadArray([], placesToVisit, true).sort());
console.log("Original order:", placesToVisit);
console.log("Reverse alphabetical order:", __spreadArray([], placesToVisit, true).sort().reverse());
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
var guesList = ["Faiza", "Ayesha", "Amna", "Shafia", "Asiaa", "Jaweria"];
for (var i = 0; i < guesList.length; i++) {
    console.log("Dear ".concat(guesList[i], ", Join us for a delicious dinner filled with good food, great company, and unforgettable moments. Your presence would make the evening complete."));
}
console.log("We are inviting ".concat(guesList.length, " people to dinner."));
//ASSIGNMENT NO.20
var programmingLanguages = ["HTML", "CSS", "JavaScript", "Python", "Java", "C++", "TypeScript", "Rust"];
console.log("List of programming languages:");
for (var i = 0; i < programmingLanguages.length; i++) {
    console.log(programmingLanguages[i]);
}
//ASSIGNMENT NO.21
var countries = {
    "USA": { capital: "Washington D.C.", population: 331002651, language: "English" },
    "China": { capital: "Beijing", population: 1439323776, language: "Mandarin" },
    "India": { capital: "New Delhi", population: 1380004385, language: "Hindi" },
    "Germany": { capital: "Berlin", population: 3577000, language: "German" },
    "Russia": { capital: "Moscow", population: 145934462, language: "Russian" }
};
console.log("Information about different countries:");
for (var country in countries) {
    console.log("".concat(country, ":"));
    console.log("  Capital: ".concat(countries[country].capital));
    console.log("  Population: ".concat(countries[country].population));
    console.log("  Language: ".concat(countries[country].language));
}
//ASSIGNMENT NO.22
var fruits = ["Apple", "Banana", "Orange"];
console.log(fruits[3]);
console.log(fruits[2]);
//ASSIGNMENT NO.23
var age = 25;
var temperature = 20;
var isRaining = true;
var isSunny = false;
var day = 'Tuesday';
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
var fruit = 'apple';
console.log("Is fruit == 'apple'? I predict True.");
console.log(fruit == 'apple');
var animal = 'lion';
console.log("Is animal != 'tiger'? I predict True.");
console.log(animal != 'tiger');
var cityName = 'New York';
console.log("Is cityName.toLowerCase() == 'new york'? I predict True.");
console.log(cityName.toLowerCase() == 'new york');
var month = 'April';
console.log("Is month.toLowerCase() != 'april'? I predict False.");
console.log(month.toLowerCase() != 'april');
var num1 = 10;
var num2 = 5;
console.log("Is num1 > num2? I predict True.");
console.log(num1 > num2);
console.log("Is num1 <= num2? I predict False.");
console.log(num1 <= num2);
var isWeekend = true;
var isHoliday = false;
console.log("Is it a weekend and a holiday? I predict False.");
console.log(isWeekend && isHoliday);
console.log("Is it a weekend or a holiday? I predict True.");
console.log(isWeekend || isHoliday);
var colors = ['red', 'blue', 'green', 'yellow'];
console.log("Is 'blue' in the colors array? I predict True.");
console.log(colors.includes('blue'));
console.log("Is 'black' not in the colors array? I predict True.");
console.log(!colors.includes('black'));
//ASSIGNMENT NO.25
var alien$Color = 'green';
if (alien$Color === 'green') {
    console.log("Congratulations! You just earned 5 points.");
}
var alienColor = 'yellow';
if (alienColor === 'green') {
    console.log("Congratulations! You just earned 5 points.");
}
//ASSIGNMENT NO.26
var alien_Color = 'green';
if (alien_Color === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the alien.");
}
else {
    console.log("Congratulations! You just earned 10 points for shooting the alien.");
}
var alien_color = 'yellow';
if (alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the alien.");
}
else {
    console.log("Congratulations! You just earned 10 points for shooting the alien.");
}
//ASSIGNMENT NO.27
var Alien_color = 'green';
if (Alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
}
else if (Alien_color === 'yellow') {
    console.log("Congratulations! You just earned 10 points for shooting the yellow alien.");
}
else if (Alien_color === 'red') {
    console.log("Congratulations! You just earned 15 points for shooting the red alien.");
}
var Alien_Color = 'yellow';
if (Alien_Color === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
}
else if (Alien_Color === 'yellow') {
    console.log("Congratulations! You just earned 10 points for shooting the yellow alien.");
}
else if (Alien_Color === 'red') {
    console.log("Congratulations! You just earned 15 points for shooting the red alien.");
}
var alienColor123 = 'red';
if (alienColor123 === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
}
else if (alienColor123 === 'yellow') {
    console.log("Congratulations! You just earned 10 points for shooting the yellow alien.");
}
else if (alienColor123 === 'red') {
    console.log("Congratulations! You just earned 15 points for shooting the red alien.");
}
//ASSIGNMENT NO.28
var personAge = 30;
if (personAge < 2) {
    console.log("The person is a baby.");
}
else if (personAge >= 2 && personAge < 4) {
    console.log("The person is a toddler.");
}
else if (personAge >= 4 && personAge < 13) {
    console.log("The person is a kid.");
}
else if (personAge >= 13 && personAge < 20) {
    console.log("The person is a teenager.");
}
else if (personAge >= 20 && personAge < 65) {
    console.log("The person is an adult.");
}
else {
    console.log("The person is an elder.");
}
//ASSIGNMENT NO.29
var favorite_fruits = ["apple", "banana", "strawberry"];
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
var user_names = ["admin", "Ayesha", "Uroosa", "Sadia", "Fariha"];
for (var _i = 0, user_names_1 = user_names; _i < user_names_1.length; _i++) {
    var username = user_names_1[_i];
    if (username === 'admin') {
        console.log('Hello admin, would you like to see a status report?');
    }
    else {
        console.log("Hello ".concat(username, ", thank you for logging in again."));
    }
}
//ASSIGNMENT NO.31
var usernames = [];
if (usernames.length > 0) {
    for (var _a = 0, usernames_1 = usernames; _a < usernames_1.length; _a++) {
        var username = usernames_1[_a];
        if (username === 'admin') {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log("Hello ".concat(username, ", thank you for logging in again."));
        }
    }
}
else {
    console.log("We need to find some users!");
}
//ASSIGNMENT NO.32
var current_users = ["Sara", "Salma", "Shazia", "Shagufta", "Shabnam"];
var new_users = ["Shaheen", "Shakeela", "Sadia", "Sofia", "Saima"];
var current_users_lower = current_users.map(function (username) { return username.toLowerCase(); });
for (var _b = 0, new_users_1 = new_users; _b < new_users_1.length; _b++) {
    var new_user = new_users_1[_b];
    var new_user_lower = new_user.toLowerCase();
    if (current_users_lower.includes(new_user_lower)) {
        console.log("The username '".concat(new_user, "' is not available. Please enter a new username."));
    }
    else {
        console.log("The username '".concat(new_user, "' is available."));
    }
}
//ASSIGNMENT NO.33
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _c = 0, numbers_1 = numbers; _c < numbers_1.length; _c++) {
    var number = numbers_1[_c];
    if (number === 1) {
        console.log("".concat(number, "st"));
    }
    else if (number === 2) {
        console.log("".concat(number, "nd"));
    }
    else if (number === 3) {
        console.log("".concat(number, "rd"));
    }
    else {
        console.log("".concat(number, "th"));
    }
}
//ASSIGNMENT NO.34
var favorite_Pizzas = ["Pepperoni", "Margherita", "Supreme"];
for (var _d = 0, favorite_Pizzas_1 = favorite_Pizzas; _d < favorite_Pizzas_1.length; _d++) {
    var pizza = favorite_Pizzas_1[_d];
    console.log("I like ".concat(pizza, " pizza."));
}
console.log("I really love pizza!");
//ASSIGNMENT NO.35
var animals = ["Dog", "Cat", "Rabbit"];
for (var _e = 0, animals_1 = animals; _e < animals_1.length; _e++) {
    var animal_1 = animals_1[_e];
    console.log("A ".concat(animal_1.toLowerCase(), " would make a great pet."));
}
console.log("Any of these animals would make a great pet!");
//ASSIGNMENT NO.36
function make_shirt(size, message) {
    console.log("The shirt size is ".concat(size.toUpperCase(), " and it will have the message: \"").concat(message, "\"."));
}
make_shirt('medium', 'Hello, World!');
//ASSIGNMENT NO.37
function makeShirt(size, message) {
    if (size === void 0) { size = 'large'; }
    if (message === void 0) { message = 'I love TypeScript'; }
    console.log("The shirt size is ".concat(size.toUpperCase(), " and it will have the message: \"").concat(message, "\"."));
}
makeShirt();
makeShirt('medium');
makeShirt('small', 'JavaScript is awesome!');
//ASSIGNMENT NO.38
function describe_city(city, country) {
    if (country === void 0) { country = 'Unknown'; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
describe_city('Karachi', 'Pakistan');
describe_city('New York', 'USA');
describe_city('Paris');
//ASSIGNMENT NO.39
function city_country(city, country) {
    return "".concat(city, ", ").concat(country);
}
console.log(city_country('Lahore', 'Pakistan'));
console.log(city_country('Tokyo', 'Japan'));
console.log(city_country('Paris', 'France'));
//ASSIGNMENT NO.40
function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
var album1 = make_album('Artist 1', 'Album 1');
var album2 = make_album('Artist 2', 'Album 2', 12);
var album3 = make_album('Artist 3', 'Album 3');
console.log(album1);
console.log(album2);
console.log(album3);
//ASSIGNMENT NO.41
function showMagicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
var magicianNames = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
showMagicians(magicianNames);
//ASSIGNMENT NO.42
function showmagicians(magicians) {
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        console.log(magician);
    }
}
function makeGreat(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great ".concat(magicians[i]);
    }
    return magicians;
}
var magician_name = ["Asif Shah", "Sabir Ali", "Sultan", "Shoukat Hameed"];
var greatMagicians = makeGreat(magician_name);
showmagicians(greatMagicians);
//ASSIGNMENT NO.43
function show_magicians(magicians) {
    for (var _i = 0, magicians_3 = magicians; _i < magicians_3.length; _i++) {
        var magician = magicians_3[_i];
        console.log(magician);
    }
}
function make_great(magicians) {
    var modified_magicians = [];
    for (var _i = 0, magicians_4 = magicians; _i < magicians_4.length; _i++) {
        var magician = magicians_4[_i];
        modified_magicians.push("the Great ".concat(magician));
    }
    return modified_magicians;
}
var magician_names = ["Asif Shah", "Sabir Ali", "Sultan", "Shoukat Hameed"];
var great_magicians = make_great(__spreadArray([], magician_names, true));
console.log("Original Magicians:");
show_magicians(magician_names);
console.log("\nGreat Magicians:");
show_magicians(great_magicians);
//ASSIGNMENT NO.44
function order_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making sandwich with the following items:");
    for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
        var item = items_1[_a];
        console.log("- " + item);
    }
    console.log("Enjoy your sandwich!\n");
}
order_sandwich("Turkey", "Lettuce", "Tomato", "Mayo");
order_sandwich("Ham", "Cheese");
order_sandwich("Peanut Butter", "Jelly", "Banana");
//ASSIGNMENT NO.45
function store_car_info(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car_info = {
        manufacturer: manufacturer,
        model: model
    };
    for (var _a = 0, options_1 = options; _a < options_1.length; _a++) {
        var option = options_1[_a];
        for (var key in option) {
            car_info[key] = option[key];
        }
    }
    return car_info;
}
var car = store_car_info('Toyota', 'Corolla', { color: 'Red' }, { year: 2024 });
console.log(car);
