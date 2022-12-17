//Zacznij od importu tej funkcji.

// import { useSelector } from 'react-redux';
// Potem wejdź do “ciała” funkcji komponentu i dodaj następującą linijkę:

// const columns = useSelector(state => state.columns);

// To tyle. Stała columns powinna od tej chwili wskazywać w naszym komponencie na tablicę columns z centrali.

//1. useSelector oczekuje na jeden argument. Argumentem tym powinna być dowolna funkcja callback. W funkcji tej otrzymujemy dostęp do całego stanu i decydujemy co z tego stanu chcemy zwrócić

//2.Nasz komponent tak naprawdę nie ma bezpośredniego dostępu do stanu z centrali, ale już useSelector taki dostęp ma

//!!jako argument otrzyma cały stan z centrali.!!

//useSelector przyjmuje jeden argument. Naszą funkcję callback. Następnie ta funkcja jest uruchamiana i co ważne, otrzymuje w postaci argumentu referencję do całego stanu. Stąd też my w naszej funkcji strzałkowej state => state.columns nazwaliśmy argument jako state. Po prostu wiedzieliśmy, że na pewno, kiedy useSelector tę funkcję uruchomi, to przekaże nam w formie argumentu cały stan.

/////////////////////////w komponencie////////////////////////////

//const tables = useSelector(getAllTables);

//const table = useSelector(state => getTableById(state, parseInt(id)));

///////w reducerze////////////////////////////////

///export const getAllTables = (state) => state.tables;

// export const getTableById = ({tables}, id) => tables.find(table => table.id === id);

//////////NAJWAZNIEJSZE/////////

//1.
//const tables uzylisy pozniej i zdektruzylowalismy do stworzeniqa pojedycznczeg komponentu (spawdz komponent show AllTables)

//wyciagnelsimy walsciwosc tables ze state

//2 . wiedzac ze dzieki useSelector uzyskujemy dostep do centali tworzymy fn getTablebyId : tam destrykuryzujemy obiekt z centrali oraz pozyskujemy id w formie referencji , ktore bedzie nam potrzbene do filtrowania (id w tym przypadku uzyskalismy z paramsow)

//w getAllTables potrzbowalismy wszystkich stoliokow

//w getTable by id pojedynczy

//export const getTableById = ({tables}, id) => tables.find(table => table.id === id);

// desturturyzacja tavles ze state wysluskanie pojedynczego stolika z wlasciowascia find i porownanie go do id, ktore uzyskalsimy z params ---> sprawdz params

/////to jeszcxze zobacz

// const table = useSelector(state => getTableById(state, parseInt(id)));

//jest jak const columns = useSelector(state => state.columns);

///poprostuv doszlismy sobie do konretnej w;asciwosci (elementu) kgdzie ligike mamy w recuer , id do porowania sciagnelsimsmy sobie z params i porwonujemy do tego co mamy w obiekcie tables
