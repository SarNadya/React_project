import React from 'react'
import CartItem from './CartItem'

const Cart = (props) => {
  return (
    <div>
      <div>
        {
          props.items.length > 0 ?
          <div>
            {
              props.items.map(obj =>{
                return(
                  <CartItem
                    key={obj.id}
                    id={obj.id}
                    title={obj.title} 
                    price={obj.price}
                    img={obj.img}
                    delete={props.delete}
                  />
                )
              })
            }
            </div>

            :<h1 className='col-md-8 offset-md-2'>Корзина пуста</h1>

        }
        <div className='row'>
          <div className='col-md-8 offset-md-2'>
            <p>Итог</p>
            <p>{props.totalPrice}</p>
            <button type='button' className='w-10 btn btn-lg btn-primary'>Забронировать</button>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart