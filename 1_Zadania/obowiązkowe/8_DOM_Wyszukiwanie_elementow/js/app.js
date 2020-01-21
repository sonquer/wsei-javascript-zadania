document.addEventListener("DOMContentLoaded", function () {
    /*
    Poniżej napisz kod rozwiązujący zadania. Odpowiedzi oddzielaj komentarzami.
     */

    //Zadanie 0
    let title = document.getElementsByClassName("title");

    function getDataAnimation(element) {
        let dataAnimation = element[0].dataset.animation;
        return dataAnimation;
    }

    console.log(getDataAnimation(title));

    //Zadanie 1

    const home1 = document.querySelector('#home');
    const home2 = document.getElementById('home');

    const firstLi = document.querySelector('[data-direction]');
    const firstBlock = document.querySelector('block');

    console.log({ home1, home2, firstLi, firstBlock });

    //Zadanie 2
    const nav = document.querySelector('nav li');
    console.log(nav);

    const divs = document.querySelectorAll('div p');
    console.log(divs);

    const divsInArticle = document.querySelector('article div');
    console.log(divsInArticle);

    //Zadanie 3
    const articleTag = document.querySelector('article.first');
    const everyH1 = articleTag.querySelectorAll('h1').length;
    console.log(); // uzupełnic

});