import { Routes, Route } from 'react-router-dom';
import List from './pages/ListChampions';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import ChampionDetails from './pages/ChampionDetails';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/champions' element={<List />} />
        <Route path='/champion/:name' element={<ChampionDetails />} />
      </Routes>
    </>
  );
}

export default App;
