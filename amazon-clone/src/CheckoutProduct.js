import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'

function CheckoutProduct({id, price, rating, image, title})
{

    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket = () => {
        // function to remove item from basket
        dispatch ({
            type: "REMOVE_FROM_BASKET",
            id: id,
        });
    }

    return (
        <div className = 'checkoutProduct'>
            <img src = {image} alt = '' />

            <div className = 'checkoutProduct__info'>
                <p className = 'checkoutProduct__title'>{title}</p>
                <p className = 'checkoutProduct__price'>
                    <small>INR</small>
                    <strong>{price}</strong>
                </p>                

                <div className = 'checkoutProduct__rating'>
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p>🌟</p>
                    ))}
                </div>

                <button type = 'button' onClick = {removeFromBasket}>Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct