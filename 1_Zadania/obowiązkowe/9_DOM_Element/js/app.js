document.addEventListener("DOMContentLoaded", function () {
    var homeElement = document.getElementById("home");
    var childElements = document.querySelector(".oferts").children;
    var banner = document.querySelector(".ban");
    var blocks = document.querySelectorAll(".block");
    var links = document.querySelector(".links").children;

    //Zadanie 0
    var getDatasinfo = function (elements) {
        var tab = [];
        for (var i = 0; i < elements.length; i++) {
            tab.push(elements[i].dataset.color);
        }

        return tab;
    }
    console.log(getDatasinfo(links));

    //Zadanie 1
    console.log('home element:', homeElement);
    console.log('child element: ', childElements);
    console.log('baner element: ', banner);
    console.log('blocks element: ', blocks);
    console.log('links element: ', links);

    for (var i = 0; i < childElements[i].length; i++) {
        console.log('nazwa tagu: ', childElements[i].tagName)
        console.log('nazwa klasy: ', childElements[i].classList)
    };

    for (var i = 0; i < blocks[i].length; i++) {
        console.log('nazwa tagu: ', blocks[i].tagName)
        console.log('nazwa klasy: ', blocks[i].classList)
    };

    for (var i = 0; i < links[i].length; i++) {
        console.log('nazwa tagu: ', links[i].tagName)
        console.log('nazwa klasy: ', links[i].classList)
    };

    //Zadanie 3

    var newBlocks = document.querySelector('.blocks');
    console.log(newBlocks.innerHTML);
    console.log(newBlocks.outerHTML);
    //dopisać komentarz

    newBlocks.innerHTML = "Nowa wartosc diva o klasie blocks";

    var mainFooter = document.querySelector('#mainFooter');
    console.log(mainFooter);

    function getId(element) {
        var id = element.getAttribute('id');
        console.log(id);
        return id;
    }
    getId(mainFooter);

    //Zadanie 4
    function getTags(elements) {
        var tab = [];

        for (var i = 0; i < elements[i].length; i++) {
            tab.push(elements[i].tagName);
        }
        return tab;
    }
    console.log(getTags(childElements));


});