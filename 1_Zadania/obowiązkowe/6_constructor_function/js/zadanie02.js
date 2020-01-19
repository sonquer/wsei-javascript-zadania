function Calculator(){
    this.story = [];
}

Calculator.prototype.add = function(num1, num2){
    let result = num1 + num2;
    this.story.push(`Added ${num1} to ${num2} got ${result}`);
    return result;
}

Calculator.prototype.multiply = function(num1, num2){
    let result = num1 * num2;
    this.story.push(`Multipled ${num1} to ${num2} got ${result}`);
    return result;
}

Calculator.prototype.subtract = function(num1, num2){
    let result = num1 - num2;
    this.story.push(`Subtracted ${num1} to ${num2} got ${result}`);
    return result;
}

Calculator.prototype.divide = function(num1, num2){
    let result = num1 / num2;
    this.story.push(`Divided ${num1} to ${num2} got ${result}`);
    return result;
}

Calculator.prototype.printOperations = function(){
    console.table(this.story);
}

Calculator.prototype.clearOperations = function(){
    this.story = [];
}

var newCalculator = new Calculator();
newCalculator.add(5,6);
newCalculator.multiply(5,6);
newCalculator.subtract(5,6);
newCalculator.divide(5,6);

newCalculator.printOperations();
newCalculator.clearOperations();
newCalculator.printOperations();