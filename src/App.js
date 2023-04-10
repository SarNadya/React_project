import './App.css';
import Header from './components/Header/Header';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home/Home';
import Favorites from './components/Favorites';
import Cart from './components/Cart';
import Description from './components/Description/Description';

function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route exact = 'true' path="/" element={<Home/>}/>
          <Route path="/favorites" element={<Favorites/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/description" element={<Description/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
