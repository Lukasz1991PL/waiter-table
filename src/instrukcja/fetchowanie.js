//w tym konkretnym przypadku, musimy rozdzielic fech na dwie czesci :

//1. fetchowanie GET tables czyli danych z serwera (narazie nie patch sie na ten adres normalnie powinien byc endpoint podany: 'http://localhost:3131/api'

/////////////////////////////////GET/////////////////////////////////////////////

// //export const fetchTables = () => {
//     return (dispatch) => {
//         fetch(`${API_URL}/tables`)
//       .then(res => res.json())
//       .then(tables => dispatch(loadTables(tables)));
//       }
//     }

////////////////////////////////////POST///////////////////////////////////

// export const updateTableRequest = (update) => {
//     return (dispatch) => {
//       const options = {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//           status: update.status,
//           peopleAmount: update.peopleAmount,
//           maxPeopleAmount: update.maxPeopleAmount,
//           bill: update.bill,
//         }),
//       }

//       fetch(`${API_URL}/tables/${update.id}`, options)
//       .then(res => {console.log(res); dispatch(editTable(update))});
//     }
//   }

//////////////FETCH NA POCZATKU APLIKACJI W KOMPONENCIE APP ///////////////////////////

// function App() {
//     const dispatch = useDispatch();

//     useEffect(() => dispatch(fetchTables()) ,[dispatch]);

//[dispatch] znajduje sie w kwadratowych nawiasach poniewaz, zapewniamy react ze dispatch istnieje, i nie musimy sie obawiaj ze komponent  sie z rerederuje bo dispach jest stala funkcja inigdy sie nie zmieni

////////////////////////////////////INITIAL STATE//////////////////////////////////////

//TRZBA NADAC ODPOWIEDNI KEY: TABLES

//////////////////////////////////FETCH I DISPATCH/////////////////////////////////////

//wewnatrz fukcji fetch mamy dispatch aby a niego skorzystac trzeba uzyc dispatch jako argumentu ( nia mozna wydobyc dispacha bezposrenido)

//DISPATCH ZOSTALO PRZKAZANY W FORMIE ARGUMENTU (WYDODOBYLISMY gO Z HOOKA DISPACT I DZIEKI TEMU FUNKCJA FETCH BEDZIE MOGLA  Z NIEGO SKORZYSTAC)

// function App() {
//     const dispatch = useDispatch();

//     useEffect(() => dispatch(fetchTables()) ,[dispatch]);

////////////////////////PODSUMOWANIE///////////////////////////////////////

// W KOMPONENCIE APP URUCHAMIAMY FUNKCJE POSREDNIK (WYWYOLUJEMY FN FETCHTABLES)

// FETCHATABLES LACZY SIE Z SERWEREM, POBIERA DANE

////////////REDUX-THUNK////////////////////////////////

///STWORZONY Z MYSLA O FUNKCJACH POSREDNIKACH

//MUSIMY ZMINIEC FUNKCJE POSREDNIK : ZAMIAST DISPATCH JAKO ARGUMENT , ZWRACA FUNKCJE
//zamaiast//:
// //export const fetchTables = (dispatch) => {
//
//       fetch(`${API_URL}/tables`)
//       .then(res => res.json())
//       .then(tables => dispatch(loadTables(tables)));
//       }
//     }
//to:
//// //export const fetchTables = () => {
//     return (dispatch) => {
//         fetch(`${API_URL}/tables`)
//       .then(res => res.json())
//       .then(tables => dispatch(loadTables(tables)));
//       }
//     }

//DZIEKI TEMU TE FUNKCJE MOZEMY WLACZAC JAKGDYBYSMY WLACZALI ZWYKLA AKCJE ( MIMO ZE WIEMY ZE TO FUNKCJA POSREDNIK)

// function App() {
//     const dispatch = useDispatch();

//     useEffect(() => dispatch(fetchTables()) ,[dispatch]);

//ZAMIAST ( zobacz jak dispatch wyglada)

// function App() {
//     const dispatch = useDispatch();

//     useEffect(() => fetchTables(dispatch) ,[dispatch]);

///////////////////TRZABA DODAC PLUGIN THUNK W STORE///////////////////////////

// //const store = createStore(
//     reducer,
//     initialState,

//     compose(
//       applyMiddleware(thunk),
//       window.__REDUX_DEVTOOLS_EXTENSION__
//         ? window.__REDUX_DEVTOOLS_EXTENSION__()
//         : (f) => f
//     )
//   );

///////////////////NJAWAZNIJSZE PODSUMOWANIE NA PODSTAWIE UPDATE REQUEST //////////////

//1 DISPACHUJEMY AKCJE  W KOMPONENCIE : dispatch(updateTableRequest(data));
// WT TYM MOMENCIE ZACHODZA TYLKO ZMAINY LOKALNE (DANE NIE SA WYSYLANE DO SERWERA I PO ODSWIERZENIU SIE STRONY WSZYZSTKO ZNIKNIE DO POPRZEDNIEGO STANU)

//2.W REDUCERZE TWORZYMY AKCJE KOTRA BEDZIE DODAWAC DANE Z TABLES DO SERWERA I JAK TO SIE UDA(THEN) ZROBI TEZ ZMIANE LOKALNIE

//3. KORZYSTAMY Z PLAGNU THANK KTORA TOWRZY FUNKCJE KTORA ZWRACA KOLEJNA FUNKCJE E KTOREJ ZAPISUJEMY WLASCIWE INSTRUKCJE \A WEWENETRZA FUNKCJA JEST NASZA FUNKCJA POSREDNIKIEM)

/////////////////co robimy po koeli //////////////////////////////
// import { updateTableRequest } from '../../redux/tablesReducer';
// dispatch(updateTableRequest(data));

// handleSubmit w komponencie dispatchuje updateTableRequest (zwroc uwage) -

// 1. importujemy funkcje posrednik updateTableRequest
// 2. dispchujemu updateTableRequest
// 3. wlaczamy funkcje posrednik updateTableRequest z argumentem data
// 4. dopieroa ona po dokonaniu znmain na serwerze POST
// 5. THEN - URUCHAMIA AKCJE ZMIENIAJACA LOKALNIE DANE w magazynie!

// WAZNE :
// FUNKCJA POSREDNIK OTRZUJE DANE W POSTACI ARGUMENTU (DATA):

// dispatch(updateTableRequest(data));

// dzieki temu ze jest przekazaane w argumencie , fukja ktora funka posrednik zwraca tez moze korzystac z tego argumentu (korzysta z zakresu wyzej )

// NASZA FUNKCJA WEWNETRZNA BEDZIE MIALA DOSTEP DO ZAKRESU WYZEJ, WEIC JESLI W FUKCJI WYZEJ JEST argument data to fn wewntrzna tez bedzie iala to niej dostep

//podsumowujac:

//-jesli chcemyprzekazac jakies informacje do funkcji posrednika to nalezty przeKazac je jako parametry do funkcj, ktora ta funkcja posrednik zwraca

// export const updateTableRequest = (update) => {
//     return (dispatch) => {
//       const options = {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//           status: update.status,
//           peopleAmount: update.peopleAmount,
//           maxPeopleAmount: update.maxPeopleAmount,
//           bill: update.bill,
//         }),
//       }

//       fetch(`${API_URL}/tables/${update.id}`, options)
//       .then(res => {console.log(res); dispatch(editTable(update))});
//     }
//   }
