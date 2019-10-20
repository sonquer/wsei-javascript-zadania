
var task1Array = [
    [2, 3],
    ["Ala", "Ola"],
    [true, false],
    [5, 6, 7, 8],
    [12, 15, 67]
];


var task2Array = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];

//ZADANIE 0

function checkArray(arr) {
    var outputArray = [];
    for(let i in arr) {
        var checked = true;
        for(let j in arr[i]) {
            if(arr[i][j] % 2 != 0) {
                checked = false
            }
        }

        outputArray.push(checked);
    }

    return outputArray;
}

checkArray([
    [11, 12],
    [42, 2],
    [-4, -120],
    [0, 0],
    [1, 34],
]);

//ZADANIE 1

console.log(task1Array[3][2]);
console.log(task1Array[1].length);
console.log(task1Array[4][2]);

//ZADANIE 2 

for(let i in task2Array) {
    console.log(task2Array[i]);
}

for(let i in task2Array) {
    console.log(task2Array[i].length);
}

for(let i in task2Array) {
    for(let j in task2Array[i]) {
        console.log(task2Array[i][j]);
    }
}

//ZADANIE 3 

function print2DArray(arr) {
    for(let i in arr) {
        for(let j in arr[i]) {
            console.log(arr[i][j]);
        }
    }
}

//ZADANIE 4 

var array = [
    [1,2,3,4,5],
    [false, true, false, 'asdf'],
    [-1, 'test']
];

//ZADANIE 5

function create2DArray(rows, columns) {
    var it = 0;
    var outsideTab = [];
    for(var i = 0; i < rows; i++) {
        var insideTab = [];
        for(j = 0; j < columns; j++) {
            insideTab.push(++it);
        }
        outsideTab.push(insideTab);
    }
    
    return outsideTab;
}

create2DArray(4,4);