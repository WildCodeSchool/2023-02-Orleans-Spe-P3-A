import { Routes, Route } from 'react-router-dom';backgroundB2g.jpg
import List from './pages/ListChampions';
import Home from './pages/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/champions' element={<List />} />
      </Routes>
    </>
  );
}

export default App;
