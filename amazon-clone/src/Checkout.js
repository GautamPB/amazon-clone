import React from 'react'
import { useStateValue } from './StateProvider'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'

function Checkout()
{
    const [{basket}] = useStateValue();
    return (
        <div className = 'checkout'>
            <div className = 'checkout__left'>
            {basket?.length === 0 ? (
                <div>
                    <h2>You have no items in your shopping basket!
                        To buy one or more items, click "Add to Basket" below the item
                    </h2>
                </div>   
            ) : (
                <div>
                    <h2>Your Shopping Basket</h2>
                    {basket?.map((item) => (
                        <CheckoutProduct 
                            id = {item.id}
                            title = {item.title}
                            image = {item.image}
                            price = {item.price}
                            rating = {item.rating}
                        />
                    ))}
                </div>
            )}
            </div>
            {basket.length > 0 && (
                <div className = 'checkout__right'>
                    <Subtotal />
                </div>
            )}
        </div>
    )
}

export default Checkout;