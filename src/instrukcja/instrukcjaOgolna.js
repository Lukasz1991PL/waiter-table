///////////////////////////////////////////////////////////////
//1. Tworzymy Reddux :

//1.1 Store (spawdz Notion - combine reducers redux-thunk)

//1.2 Initial state

//1.3 tworzymy pierwszy subReducer (sprawdz notion- w tym projekcie tablesReducer)

//1.4 1Następnie zadbaj o to, aby nasz subreducer był importowany w pliku store.js i aby funkcja combineReducers wiedziała, że ma on obsługiwać właśnie state.tables

//1.5 opakuj APP w provider zeby dostarczyc store (patrz APP)

//spawdzic byle jaki m dipachem czy dzial
////////////////////////////////////////////////////////////////////////////

//2. przygotuj Router : (APP)
//2.1 ile podstron ?
//2.2 gdzie te pdostrony umiescic ?
//2.3 w projekcie podstorny ktroe wyswietlaja stolik ze wzgledu na id oraz glowna strona home - spawdz APP

/// – główna strona z listą stolików,
///table/:id – podstrona pojedynczego stolika.

//2.4 opakuj App w indexie  “opakuj” go teraz w <BrowserRouter>.

//////////////////////////////KOMPONETY WIDOK//////////////////////////////////////////

//3.2// Dodaj do components/views odpowiednie komponenty–podstrony i zadbaj o to, aby były renderowane w <App> pod odpowiednimi adresami. Sama treść tych komponentów powinna być na razie bardzo prosta. Wystarczy, że będą renderowały jakiś nagłówek z nazwą podstrony. Dokładniej zajmiemy się bowiem nimi później. Pamiętaj – od ogółu do szczegół

////////////////////////////////////////////////////////////////////////////////////////

//3.3 od strony glowenj a wiec Header

//3.4 w Hederze Navbar

//3.5 w Navbar na porojekcie mamy przycisk home (Link) oraz tytul appki

//3.6 zbuduj storne glowna Home na kgorej wyswietlac sie beda :

//tytul i wszystkie stoliki na stornie (z routem /) czyli Home

/////////////////Fetch//////////////////////////////////////////

//1.Zanim zbudujesz podstrone czy cokolwiek, musisz sfechowac dane

//zbuduj podstrone z pojedynczym table i daj route do tego

///najpierw zrobic logike
//czyli moj console.log jest payloadem stworzyc dobiekt z danymi na tej podsawie tworze reducer
//zanim wyslesz payload prawdz czyw wszystko dzila :

//1. zrob podstone tylko wygld i div buttony inputhy itd ,
//pozniej handleSubmityi ocClicki itd
//pozniej rozpisz logike w react - sparwdz na console log czy dziala
