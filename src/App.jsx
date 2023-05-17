import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home/Home';
import Favorites from './components/Favorites/Favorites';
import Cart from './components/Cart/Cart';
import Description from './components/Description/Description';
import Form from './components/Form/Form';
import { useEffect, useState } from 'react';
import axios from 'axios';
import React from 'react';
import Footer from './components/Footer/Footer';

export const AppContext = React.createContext({})

function App() {
  const [tours, setTours] = useState([]);

  const [favorites, setFavorites] = useState([]);

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    async function axiosData() {
      const toursData = await axios.get('https://637f91ca2f8f56e28e904e7d.mockapi.io/tyrs');
      const favoritesData = await axios.get('https://637f91ca2f8f56e28e904e7d.mockapi.io/favorites');
      const cartData = await axios.get('https://637f91ca2f8f56e28e904e7d.mockapi.io/cart');
      setTours(toursData.data);
      setFavorites(favoritesData.data);
      setCartItems(cartData.data);
    }
    axiosData();
  }, [setTours, setFavorites, setCartItems])

  const deleteItem = id => {
    axios.delete(`https://637f91ca2f8f56e28e904e7d.mockapi.io/cart/${id}`)
    setCartItems(obj => obj.filter(item => item.id !== id))
  }

  const isAdded = myId => {
    return cartItems.some(obj => obj.id === myId)
  }

  const isFavorites = myId => {
    return favorites.some(obj => obj.id === myId)
  }

  return (
    <AppContext.Provider
      value={{ tours, setTours, favorites, setFavorites, cartItems, setCartItems, isAdded, isFavorites }}
    >
      <div>
        <Router>
          <Header />
          <Routes>
            <Route exact='true' path="/"
              element={
                <Home
                  favorites={favorites}
                  setFavorites={setFavorites}
                  items={tours}
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                />
              } />
            <Route path="/favorites"
              element={
                <Favorites
                  favorites={favorites}
                  setFavorites={setFavorites}
                  items={tours}
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                />
              } />
            <Route path="/cart"
              element={
                <Cart
                  items={cartItems}
                  delete={deleteItem}
                  totalPrice={
                    cartItems.reduce((element = cartItems.length, obj)=>
                    element+obj.price, 0 
                    )}
                />
              } />
            <Route path="/description" element={<Description />} />
            <Route path="/form" element={<Form />} />
          </Routes>
        </Router>
      </div>
      <Footer/>
    </AppContext.Provider>
  );
}

export default App;
