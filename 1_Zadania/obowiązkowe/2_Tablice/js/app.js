//Zadanie 0

function distFromAvarage(array) {
    sum = array.reduce((a, b) => a + b);
    avg = sum / array.length;

    let newArray = [];
    for(let i in array) {
        newArray.push(array[i] - avg);
    }

    return newArray;
}

distFromAvarage([1,2,3,4,5,6,7])

//Zadanie 1

const fruits = ['Mango', 'Banana', 'Apple'];
console.log(fruits[0]);
console.log(fruits[fruits.length - 1])
for(let i = 0; i<fruits.length; i++) {
    console.log(fruits[i]);
}

//Zadanie 3

function printTable(array) {
    array.forEach(item => {
        console.log(item);
    })
}

printTable([1,2,3,4])

//Zadanie 4

function multiply(array) {
    let m = 1;
    for(let i in array) {
        m *= array[i]
    }

    return m;
}

multiply([1,2,3,4,5,6,7])
multiply([1,1,1,1])
multiply([2,8,3,7])

//Zadanie 5

function getEvenAvarage(array) {
    let evenCount = 0;
    let sum = 0;
    for(let i in array) {
        if(array[i] % 2 == 0) {
            evenCount++;
            sum += array[i];
        }
    }

    if(evenCount <= 0) {
        return null;
    }

    let avg = sum/evenCount;
    return avg;
}

getEvenAvarage([1,2,3,4,5,6,7])
getEvenAvarage([2,8,3,7,4])

//Zadanie 6

var sortArray = (array) => array.sort((a,b) => a-b);
sortArray([145,11,3,64,4,6,10])

//Zadanie 7

