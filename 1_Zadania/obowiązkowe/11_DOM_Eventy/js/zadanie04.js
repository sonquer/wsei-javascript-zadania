document.addEventListener('DOMContentLoaded', () => {
    var buttons = document.querySelectorAll('button');
    let counter = document.querySelector(".counter");
    
    for(let i=0; i<buttons.length; i++) {
        buttons[i].addEventListener("click", function() {
            counter.innerText = parseInt(counter.innerText) + 1;
        });
    }
});