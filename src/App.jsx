import List from './components/ListChampions';
import { Routes, Route } from 'react-router-dom';
import List from './pages/ListChampions';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/champions' element={<List />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
