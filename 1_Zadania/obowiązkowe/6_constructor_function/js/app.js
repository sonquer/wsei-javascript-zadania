function Basket(){
    this.product = [];
    this.sum = 0;
}

Basket.prototype.addProduct = function(name, price){
    this.product.push(name);
    this.sum += price;
}

Basket.prototype.showBasket = function(){
    for(let i in this.product){
        console.log(this.product[i])
    }
    console.log(this.sum);
}

var aliceBasket = new Basket();
aliceBasket.addProduct("pomidor",10);
aliceBasket.addProduct("arbuz",40);
aliceBasket.showBasket();

var bruceBasket = new Basket();
bruceBasket.addProduct("rice", 10);
bruceBasket.addProduct("grzyby mun",50);
bruceBasket.addProduct("tofu",20);
bruceBasket.showBasket();