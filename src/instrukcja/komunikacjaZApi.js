// Edycja danych, a komunikacja z serwerem API
// Podczas wideowarsztatów przypomnieliśmy Ci, jak należy połączyć się z serwerem, aby pobrać dane. Kiedy pracowaliśmy nad aplikacją Pizzerii, pokazaliśmy Ci również, jak przygotować to połączenie, aby dodać nowe. Nigdy nie mówiliśmy jednak jeszcze o edycji danych na serwerze. W tym projekcie na pewno nam się to przyda. W końcu na podstronie pojedynczego stolika kelner ma mieć możliwość edycji danych. Chcielibyśmy, aby modyfikacja na tej podstronie faktycznie modyfikowała dany stolik również na serwerze. Tylko wtedy bowiem przy odświeżeniu strony, użytkownik zobaczy faktycznie zmodyfikowane dane.

// Jak więc należy skorzystać z funkcji fetch, aby zmodyfikować konkretny obiekt z konkretnej kolekcji danych na serwerze?

// Przede wszystkim, musimy w adresie wskazać na id elementu, który chcemy zmodyfikować.

// Np.

// fetch('http://localhost:8000/tables/1')
// Oprócz tego, musimy skorzystać z jednej z dwóch metod: PUT albo PATCH. W przypadku pierwszej, mówimy serwerowi, że chcemy podmienić CAŁY obiekt na nową zawartość. Jaką dokładnie? Taką, jaką przekażemy w body.

// Gdybyśmy chcieli więc podmienić cały obiekt stolika, to mogłoby to wyglądać następująco:

// const options = {
//   method: 'PUT',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     id: '1',
//     status: 'busy',
//     peopleAmount: 3,
//     maxPeopleAmount: 4,
//     bill: 45
//   }),
// };

// fetch('http://localhost:3131/tables/1', options)
// Jeśli chcemy zmodyfikować tylko część informacji z obiektu, możemy z kolei skorzystać z drugiej metody – PATCH. Korzysta się z niej prawie identycznie jak z PUT. Jedyną różnicą jest tylko to, że w body możemy przekazać tylko te właściwości, które faktycznie powinny być zmienione. W takiej sytuacji serwer podmieni na nowe wartości tylko konkretne właściwości, a reszta pozostanie bez zmian.

// Np.

// const options = {
//   method: 'PATCH',

//   headers: {
//     'Content-Type': 'application/json'
//   },

//   body: JSON.stringify({
//     status: 'busy'
//   })
// };

// fetch('http://localhost:3131/tables/1', options)
// Przykładowo powyższy kod podmieni tylko właściwość status w stoliku o id równym 1. Reszta informacji o tym stoliku pozostanie bez zmian.