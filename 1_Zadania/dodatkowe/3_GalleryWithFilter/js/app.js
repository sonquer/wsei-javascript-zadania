document.addEventListener('DOMContentLoaded', () => {
    console.log('It works');

    // 2
    const imgs = document.querySelectorAll('#gallery > img');
    const input = document.querySelector('input#tagInput');
    const buttonHide = document.querySelector('button#hideButton');
    const buttonShow = document.querySelector('button#showButton');

    // 3
    buttonHide.addEventListener('click', () => {
        console.log('hideTest');

        // 4
        inputText = input.value;
        console.log(inputText);
        input.value = '';
        
        // 5
        imgs.forEach((img) => {
            // 6
            let tag = img.getAttribute('data-tag');
            if (inputText.indexOf(tag)) {
                console.log('object');
            }
        });

    });

    buttonShow.addEventListener('click', () => {
        console.log('showTest');

        // 4
        inputText = input.value;
        console.log(inputText);
        input.value = '';

        // 5
        imgs.forEach((img) => {
            console.log(img.getAttribute('data-tag'));
        });
    });

    // 4
    var inputText = '';
});