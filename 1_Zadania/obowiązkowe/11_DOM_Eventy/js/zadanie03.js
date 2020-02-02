document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('button');
    const counters = document.querySelectorAll('.counter');

    for(let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function() {
            let value = counters[i].innerHTML;
            value++;

            counters[i].innerHTML = value;
        });
    }
});