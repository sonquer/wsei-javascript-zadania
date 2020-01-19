//Zadanie 0

var car = {
    brand: 'Mercedes',
    color: 'Czarny',
    numberOfKilometers: 0,
    printCarinfo: function() {
        console.log(`${this.color} ${this.brand}, ${this.numberOfKilometers}km`);
    },
    drive: function(numb) {
        this.numberOfKilometers += numb;
    }
}

car.printCarinfo(); // "Czarny Mercedes, 0km"
car.drive(20);
car.printCarinfo(); // "Czerny mercedes, 20km"

//Zadanie 3
var stairs = {
    step: 0,
    up: function(){
        this.step++;
    },
    down: function(){
        this.step--;
    },
    printStep: function(){
        console.log(this.step);
    }
}

stairs.up();
stairs.up();
stairs.up();
stairs.down(); 
stairs.printStep();