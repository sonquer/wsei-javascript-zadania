document.addEventListener('DOMContentLoaded', () => {
    var button = document.getElementById("remove");
    button.addEventListener("click", () => {
        document.getElementsByTagName("body")[0].children[0].remove();
    });
});