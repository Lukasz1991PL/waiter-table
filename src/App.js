import { Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router';
import Header from './components/views/Header/Header';

import PageNotFound from './components/views/PageNotFound/PageNotFound';

import Home from './components/views/Home/Home';
import { useEffect } from 'react';
import { fetchTables } from './redux/tablesReducer';
import Table from './components/views/Table/Table';

function App() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchTables()), [dispatch]);
  return (
    <main>
      <Container style={{ width: '800px' }}>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='*' element={<PageNotFound />} />
          <Route path='/table/:id' element={<Table />} />
        </Routes>
      </Container>
    </main>
  );
}

export default App;

//[dispatch] znajduje sie w kwadratowych nawiasach poniewaz, zapewniamy react ze dispatch istnieje, i nie musimy sie obawiaj ze komponent  sie z rerederuje bo dispach jest stala funkcja inigdy sie nie zmieni.

//React Router! Problem, który opisujemy to tak standardowa sytuacja, że paczka ta przygotowała specjalne ułatwienie. Otóż możemy tworzyć route’y, w których wprost wskazujemy, że część linku może być różna. Wystarczy, że skorzystamy ze znaku :, który jest dla routera informacją, że coś w linku jest parametrem./jest zminna !!

//Zatem znak : i jakąś nazwę tuż po nim możemy rozumieć jako informacje dla routera, że w tym miejscu (:id) może być cokolwiek. I to “cokolwiek” ma być potem dostępne w podstronie pod nazwą id
