import React from 'react';
import Slider from './Slider';
import CardItem from '../Card/CardItem';


function Home(props) {
  return (
    <div className='conteiner'>
      <Slider/>
      <CardItem
        items={props.items}
        cartItems={props.cartItems}
        setCartItems={props.setCartItems}
        favorites={props.favorites}
        setFavorites={props.setFavorites}
      />
    </div>
  )
}

export default Home