import { Routes, Route } from 'react-router-dom';
import List from './components/ListChampions';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<div>{'Hello World!'}</div>} />
        <Route path='/champions' element={<List />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
