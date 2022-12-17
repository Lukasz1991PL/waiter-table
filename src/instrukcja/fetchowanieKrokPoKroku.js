//1. wywolujemy fetch w useEffect z dispatchem oraz importem
// import { useDispatch } from "react-redux";
// function App() {
//     const dispatch = useDispatch();

//     useEffect(() => dispatch(fetchTables()) ,[dispatch]);

//2. //tworzymy fetch w reducer (nowrlmalnie inny enpoint)
//// //export const fetchTables = () => {
//     return (dispatch) => {
//         fetch(`${API_URL}/tables`)
//       .then(res => res.json())
//       .then(tables => dispatch(loadTables(tables)));
//       }
//     }

//zobacz co ma w dipatch to jest wlasnie nasza akcja!(loadTables)

//3.tworzymy akcje

// ////action
// const LOAD_TABLES = createActionName('LOAD_TABLES');
// export const loadTables = payload => ({type: LOAD_TABLES, payload});

//4.Wrzucamy ja do reducera
// const tablesReducer = (statePart = [], action) =>{
//     switch (action.type){
//       case LOAD_TABLES:
//         return [...action.payload];

//*[...action.payload] oznacza nadpisanie stanu
