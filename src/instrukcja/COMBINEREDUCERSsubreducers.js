//subreducer:

//klasyczny reducer:

// Na razie Twoja funkcja reducer wygląda mniej więcej tak:

// const reducer = (state, action) => {
//   switch(action.type) {
//     case 'ADD_COLUMN':
//       return { ...state, columns: [...state.columns, { ...action.payload, id: shortid() }]};
//     case 'ADD_CARD':
//       return { ...state, cards: [...state.cards, { ...action.payload, id: shortid() }]};
//     case 'ADD_LIST':
//       return { ...state, lists: [...state.lists, { ...action.payload, id: shortid() }]};
//     case 'TOGGLE_CARD_FAVORITE':
//       return { ...state, cards: state.cards.map(card => (card.id === action.payload) ? { ...card, isFavorite: !card.isFavorite } : card) };
//     case 'UPDATE_SEARCHSTRING':
//       return { ...state, searchString: action.payload };
//     default:
//       return state;
//   }
// };

///wydzielone reducery:

// const listsReducer = (statePart = [], action) => {
//     switch(action.type) {
//       case 'ADD_LIST':
//         return [...statePart, { ...action.payload, id: shortid() }];
//       default:
//         return statePart;
//     }
//   }

//   const columnsReducer = (statePart = [], action) => {
//     switch(action.type) {
//       case 'ADD_COLUMN':
//         return [...statePart, { ...action.payload, id: shortid() }];
//       default:
//         return statePart;
//     }
//   }

//   const cardsReducer = (statePart = [], action) => {
//     switch(action.type) {
//       case 'ADD_CARD':
//         return [...statePart, { ...action.payload, id: shortid() }];
//       case 'TOGGLE_CARD_FAVORITE':
//         return statePart.map(card => (card.id === action.payload) ? { ...card, isFavorite: !card.isFavorite } : card);
//       default:
//         return statePart;
//     }
//   }

//   const searchStringReducer = (statePart = '', action) => {
//     switch(action.type) {
//       case 'UPDATE_SEARCHSTRING':
//         return action.payload
//       default:
//         return statePart;
//     }
//   }

// przypisanie kacji i czesci stanu do wydzielonych reducerow :

//const reducer = (state, action) => {
// const newState = {
//     lists: listsReducer(state.lists, action),
//     columns: columnsReducer(state.columns, action),
//     cards: cardsReducer(state.cards, action),
//     searchString: searchStringReducer(state.searchString, action)
//   };

//   return newState;
// };

// Podsumowując, subreducery to po prostu funkcje, które w założeniu mają zajmować się tylko konkretną częścią stanu magazynu. Dostają dostęp tylko do konkretnego wycinka danych ze stanu i tylko nim powinny się zajmować. Np. listsReducer zajmuje się tylko state.lists, cardsReducer zajmuje się tylko state.cards.

/////////////////////cobine reducer///////////////////////////////////

// //const reducer = (state, action) => {
//     const newState = {
//         lists: listsReducer(state.lists, action),
//         columns: columnsReducer(state.columns, action),
//         cards: cardsReducer(state.cards, action),
//         searchString: searchStringReducer(state.searchString, action)
//       };

//       return newState;
//     };

// combine reducer przygptowuje reducery za nas:

// czyli przekazuje odpowiedni state i akcje

// i wyglada tak :

// //const subreducers = {
//     lists: listsReducer,
//     columns: columnsReducer,
//     cards: cardsReducer,
//     searchString: searchStringReducer
//   }

//   const reducer = combineReducers(subreducers);

//Wystarczy, że dostarczymy jej prosty obiekt z informacją, który subreducer odpowiada za które dane.

//mega wazne jak przypisujesz lists to musza byc one zgodne z tym co w stacie jest czylis state.lists zeby combine reducer wiedzial na ktorych danych pracowac !!!!

i;
// czylnp columns z subreducera = state.columns!

//w duzych porketach :

//Jeden subreducer = jeden plik
