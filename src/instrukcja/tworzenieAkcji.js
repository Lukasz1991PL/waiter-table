//1. Zeby zmienic state naszej appki musimy call :
//ACTION CREATOR

// Spójrz tylko. Tak naprawdę to tylko prosta funkcja. Taka, która przyjmuje sam payload, a zwraca obiekt akcji, który ma właśnie ten przekazany payload, ale też odpowiedni typ.
// action creators
//export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });

// POPROSTU ROBIMY TAK ZEBY DISPATCH LADNIE WYGLADAL I ZMAIAST :

// dispatch({ type: 'ADD_COLUMN', newColumn: { title, icon } });

//BYL:

//dispatch(addColumn({ title, icon }));

//(PAMIETAJ O IMPORTACH)

//2.KTORTA PRODUKUJE :

//AKCJE

//3.akcja jest dipatchowana do

//DISPATCH:
// const dispatch = action => {
//     state = reducer(state, action);
//   };

// dispatch({ type: 'ADD_COLUMN', newColumn: { title, icon } });

//DISPATCH JEST POSREDNIKIEM DO WLACZENIA  REDUCERA, TO TO PRZEKAZEMY W JEGO ARGUMENCIE BEDZIE PRZEKQZANE W REDUCERZE JAKO OBIEKT ACTION. OBIEKT ACTION Z DISPATCHA MA 2 WLASCIWOCI : 1. TYPE KTORA MOWI JAKA AKCJE CHCEMY WLACZYC ORAZ PAYLOAD(MOZEMY TA WLASCIWOSC NAZWAC DOWOLNIE ) KTORA ZAWIERA WARTOSCI DO AAKCJI

//4.reducera ktory tworzy nowy STAN

// REDUCER:

// 1. Służy do modyfikacji danych i ich redukcji.

// 2.Funkcja `reducer`nie będzie bezpośrednio modyfikować stanu.

// 3.**uruchomienie funkcji `reducer` będzie oznaczało całkowite nadpisanie starego stanu.**

// 4.Funkcja **reducer**  będzie przyjmować dwa argumenty: aktualny stan oraz obiekt akcji z informacją, co trzeba zmienić i w jaki sposób

// -action.type

// -action.payload(nazwa dowolna)

// Podsumujmy więc, co już wiemy. Aby zmienić dane w magazynie, musimy jakoś uruchomić funkcję `reducer`
// , przekazać jej `state`
//  oraz poinformować, co należy zmienić. Następnie funkcja ta stworzy nowy odpowiednio zmodyfikowany stan i go zwróci

//5.state
