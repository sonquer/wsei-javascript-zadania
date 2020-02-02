document.addEventListener('DOMContentLoaded', () => {
    console.log('It Works!');

    // 2 
    const liElements = document.querySelectorAll("ul > li");

    // 3
    liElements.forEach((item) => {
        const img = item.querySelector('img');
        var fullScreenElement = null;
        var closeButton = null;

        img.addEventListener('click', function() {
            // 3
            console.log('it works');
            // 4
            console.log(img.src);
            // 6
            createFullScreenElement(img.src);

            fullScreenElement = document.querySelector('.fullScreen');
            closeButton = document.querySelector('button.close');
        });
    });

    // 5
    function createFullScreenElement(src) {
        const htmlStruct = `<div class="fullScreen">
            <img src="${src}">
            <button class="close">Close</button>
        </div>`;

        document.body.innerHTML += htmlStruct;
    }
});