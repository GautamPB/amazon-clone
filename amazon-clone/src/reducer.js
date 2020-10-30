export const initialState = { //initial state of basket
    basket: [],
    user: null,
};

export const getBasketTotal = (basket) => //selectors
basket?.reduce((amount, item) => item.price + amount, 0)

const reducer = (state, action) => {
    console.log(action);
    switch(action.type)
    {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }

        case 'ADD_TO_BASKET':
            //logic for adding items to basket
            return {
                ...state,
                basket: [...state.basket, action.item]
            }

        case 'REMOVE_FROM_BASKET':
            //logic to remove items from basket
            let newBasket = [...state.basket]; //clone the basket

            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id); //look for the index of the product to remove from the basket

            if (index >= 0) //item exists in the basket, lets remove it
            {
                newBasket.splice(index, 1); //cut the product from the basket
            }

            return { ...state, basket: newBasket }

        default:
            return state;
    }
}

export default reducer