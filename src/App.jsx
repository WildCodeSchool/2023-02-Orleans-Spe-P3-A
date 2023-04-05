import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import List from './components/ListChampions';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<div>{'Hello World!'}</div>} />
        <Route path='/champions' element={<List />} />
      </Routes>
      <Home />
    </>
  );
}

export default App;
