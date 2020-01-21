/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */


//Funkcja o nazwie "jeden"
function jeden() {

    //deklaracja zmiennej z widocznością do scope ponizej
    var zmienna1 = 1;

    //Funkcja o nazwie "dwa"
    function dwa() {

        //Wyswietlenie zmienna1
        console.log(zmienna1);

        //deklaracja zniemmej z widocznoscia do scope dwa i glebiej
        var zmienna2 = 3;
    }

    //Wywolanie funkcji "dwa"
    dwa();

    //Brak wartosci poniewaz zmienna2 jest poza widocznoscia scope funkcji jeden
    console.log(zmienna2)
}

//Wywolanie funkcji
jeden()