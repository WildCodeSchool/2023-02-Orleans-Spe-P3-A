import { Routes, Route } from 'react-router-dom';
import List from './components/ListChampions';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<div>Hello World!</div>} />
        <Route path='/champions' element={<List />} />
      </Routes>
    </div>
  );
}

export default App;
