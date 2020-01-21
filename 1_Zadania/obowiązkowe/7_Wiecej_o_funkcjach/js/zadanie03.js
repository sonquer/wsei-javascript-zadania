//Zarówno przed jak i po mozna wywolac funkcje, poniewaz i tak siegamy do jej deklaracji
sayHello();

function sayHello() {
    console.log("Cześć");
}

sayHello();


//W takim przypadku funkcje mozemy wywolac dopiero po deklaracji
//saySmth();

var saySmth = function() {
    console.log("Witaj");
}

saySmth();