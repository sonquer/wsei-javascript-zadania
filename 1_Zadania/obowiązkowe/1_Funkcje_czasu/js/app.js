function countHello(number) {
    if (number < 1 || number > 10) {
        return;
    }

    let count = 1;
    let interval = setInterval(() => {
        if (count > number) {
            clearInterval(interval);
        }

        console.log(`Hello ${count++}`);
    }, 250);
}

countHello(5);