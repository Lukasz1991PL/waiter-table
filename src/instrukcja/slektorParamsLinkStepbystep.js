///w przypadku tej konkretnej Apki kolejnosc byla taka:

//1. storzylem Navlink, ktory przekierowywyal mnie do stolika z odpwoiednim id dzieki metodzie map

//2.Link przkierowywal na podstorne poniewaz uzylismy Routa ze zminnym id , jesli uzywamy : dwukropek w roucie to informujemy go ze to co po nim nastepuje jest zmiennne ( w naszym przypadku id)

//3.w moim oproijekcie wykorzystalem useParams do "wyciagniecia" id - use params zwraca obiekt z parametrami adresu w moim przpadku obiekt {table:id}
// poeniwaz w routcie wpisalem table/:id   {/* <Route path='/table/:id' element={<Table />} /> */}

// 4.destrukturyzuje obiekt use params i wyciagam z niego id

//5. id wykorzystuje do selektora (wszczenije konweweruje na liczbe bo jest on wyciagniety z danych z serwera , ktore przychodza w postaci stringa)

//7. Selector wyglada tak :

// //const useSelector = callback => {
//     const state = cały stan z naszego magazynu;
//     return callback(state);
//  };

//w naszym przypadku :

// const table = useSelector((state) => getTableById(state, parseInt(id)));


//useSelector daje nam dostep do wszystkichk danych z centrali (daje nam go przy pomocy argumentu satate) , nastepmnie uzywamy callback fn ktora stworzyyliamy w state, zeby wyselekcjonowac potrbna nam dane 

//8. w tym przypadku uzylismy id, ktore wyluskalismy z useParams po wwszeniej opisanej sciezce , przyrownalismy sobie id do danych ze stanu i wyciagnelismy pojedynczy stolik (zajebiscue)