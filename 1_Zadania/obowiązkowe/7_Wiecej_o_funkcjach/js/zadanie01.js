
/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */

//Funkcja "sortArray"
function sortArray() {

    //tablica number'ów
    var points = [41, 3, 6, 1, 114, 54, 64];

    //Wywolanie funkcji sort nalezacej do tablic
    points.sort(function (a, b) {
        //Sortowanie rosnąco
        return a - b;
    });

    //Zwrocenie posortowanej tablicy
    return points;
}

//Wywolanie fukncji sort
sortArray();