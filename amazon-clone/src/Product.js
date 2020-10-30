import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider';

function Product(props){
    const [{}, dispatch] = useStateValue();

    const addToBasket = () =>{
        //Add items to basket
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: props.id,
                title: props.title,
                image: props.image,
                price: props.price,
                rating: props.rating,
            },
        })
    };

    return (
        <div className = 'product'>
            <div className = 'product__info'>
                <p>{props.title}</p>
                <p className = 'product__price'>
                    <small>INR</small>
                    <strong>{props.price}</strong>
                </p>
                <div class = 'product__rating'>
                    {
                        Array(props.rating)
                        .fill()
                        .map((_) => (
                            <p>🌟</p>
                        ))
                    }
                </div>
            </div>
            <img src =  {props.image}/>
                <button type = 'button' onClick = { addToBasket }>Add to basket</button>        
        </div>
    )
}

export default Product