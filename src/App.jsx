import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Home from './pages/Home';
import List from './components/ListChampions';
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
