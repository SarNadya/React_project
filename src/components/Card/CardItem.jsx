import React from 'react';
import Item from './Item';
import axios from 'axios';

const CardItem = (props) => {

  //добавление в корзину
  const onAddCart = async (obj) => {
    try {
      const findCart = props.cartItems.find(obj => obj.myId === obj.myId);
      if(findCart) {
        axios.delete(`https://637f91ca2f8f56e28e904e7d.mockapi.io/cart/${findCart.id}`)
        props.setCartItems(cart => cart.filter(item => item.myId !== obj.myId))
      } else {
        const {data} = await axios.post('https://637f91ca2f8f56e28e904e7d.mockapi.io/cart', obj)
        props.setCartItems([...props.cartItems, data])
      }
    } catch {
      alert('Произошла ошибка')
    }
  }

  //добавление в избранное
  const onAddFavorites = async (obj)=>{
    try{
      const findFavorite = props.favorites.find(favorite=> favorite.myId === obj.myId)
      if(findFavorite){
        axios.delete(`https://637f91ca2f8f56e28e904e7d.mockapi.io/favorites/${findFavorite.id}`)
        props.setFavorites(favorites => favorites.filter(item => item.myId !== obj.myId))
      }
      else{
        const {data} = await axios.post('https://637f91ca2f8f56e28e904e7d.mockapi.io/favorites', obj)
        props.setFavorites([...props.favorites, data])
      }
    }
    catch{
      alert('Произошла ошибка')
    }
  }

  return (
    <div className='conteiner py-3'>
    { 
      props.items.map(obj=>{
        return(
          <Item
            key={obj.id}
            id={obj.id}
            myId={obj.myId}
            title={obj.title}
            description={obj.description}
            price={obj.price}
            img={obj.img}
            addFavorites={favObj => {
              onAddFavorites(favObj)
            }}
            addCart={cartObj => {
              onAddCart(cartObj)
            }}
          />
        )
      })
    }
  </div>

  )
}

export default CardItem