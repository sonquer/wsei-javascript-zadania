//ZADANIE 0a

var city = {
    capital: "Cracow", 
    population: 700000,
    president: "Jacek M.",
    primeMinisters: ["A", "B"],
};

console.log(city.capital);
console.log(city.population);
console.log(city.president);
console.log(city.primeMinisters);

//ZADANIE 0b

var timeMachine = {
    shape: "A", 
    model: "Extra",
    run: function(date, place) {
        console.log(`Zostałeś przeniesony do ${place} w ${date}`)
    }
}

console.log(timeMachine.shape);
console.log(timeMachine.model);
timeMachine.run("2022-01-01", "Wrocław");

//ZADANIE 1

var book = {
    title: "Wiedźmin",
    author: "Sapkowski",
    numberOfPages: 666
};

console.log(book.title);
console.log(book.author);
console.log(book.numberOfPages);

//ZADANIE 2

var person = {
    name: "Jan",
    age: 22,
    sayHello: function() {
        console.log("Hello")
    }
}

console.log(person.name);
console.log(person.age);
person.sayHello();

//ZADANIE 3

var recipe = {
    title: "Pierogi",
    servings: 3
}

recipe.ingredients = ["A", "B"];

console.log(recipe.title);
console.log(recipe.servings);
console.log(recipe.ingredients);

//ZADANIE 6
var spoon = {
    isExist: true
}

var fork = spoon;
fork.isExist  = false;

console.log(spoon.isExist);