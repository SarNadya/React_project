import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home/Home';
import Favorites from './components/Favorites';
import Cart from './components/Cart';
import Description from './components/Description/Description';
import Form from './components/Form/Form';

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
          <Route path="/form" element={<Form/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
