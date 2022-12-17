// useParams -  ?>! :d

// `useParams` zwraca nam po prostu obiekt z parametrami adresu. Tak, z parametrami, gdyż może być ich więcej niż jeden.

// Zatem jeśli np. wpiszemy adres `list/1`, to `useParams` zwróci nam obiekt `{ listId: 1 }`, a więc da nam informację, że w miejscu parametru `listId` wpisano po prostu 1. Jeśli jednak wpiszemy adres `list/2`, to `useParams` zwróci nam obiekt `{ listId: 2 }`.

// Krótko mówiąc `useParams` powie nam, jakie są wartości parametrów linku. To, co nam więc pozostaje, to już tylko wykorzystanie tej informacji w selektorach:

///////////NAJWAZNIEJSZE///////////////////

//usePrams zwraca nam obiekt z tym co wpisalismy w adresie Routa !!!!

//<Route path='/table/:id' element={<Table />} />

//zwroci nam id:1 ! {id} = useParams() - zderstruktzowalismy wiec zwroci nam tylko liczbe!!

////czemu parsInt ?!

// Pamiętaj, że znak równości === sprawdza zarówno wartość jak i typ. Krótko mówiąc, liczba 1 nie jest równa tekstowi '1'. Tymczasem u nas w magazynie id to są liczby, a parametry w linku są zawsze tekstami, więc i nasze listId jest stringiem…

// Co możemy więc zrobić? Wydaje się, że najprościej moglibyśmy po prostu skonwertować ten tekst do liczby, przy użyciu np. parseInt. Weź jednak pod uwagę, że nowe kolumny czy nowe karty dostają już id generowane przez shortid, które będzie tekstem (np. fsdfr34fsd). I to takim, którego na liczbę już nie skonwertujemy. Tak samo będzie też z listami. Tym samym musimy założyć, że <List> musi obsługiwać też id tekstowe nie tylko liczbowe… W takim razie proponujemy to wszystko ujednolicić. Niech wszystkie id będą od razu tekstem.

// Wejdź więc teraz do pliku initialState.js i przerób wszystkie id na stringi. Np. 1 przerób na '1'.

// Teraz wejście w oba adresy powinno już działać poprawnie.

//wiec albo przerbiasz na stringi albo parsInt
