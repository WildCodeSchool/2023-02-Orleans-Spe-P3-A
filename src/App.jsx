import { Routes, Route } from 'react-router-dom';
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
