document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.box').forEach(div => {
        div.addEventListener('click', function () {
            this.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        });
    });
});