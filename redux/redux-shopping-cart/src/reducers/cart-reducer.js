import {ADD_TO_CART,UPDATE_CART,DELETE_FROM_CART} from '../actions/cart-actions';

const initalState =  {
    cart: [
        {
            product: 'bread 700g',
            quantity: 2,
            unitCost: 90
          },
          {
            product: 'milk 500ml',
            quantity: 1,
            unitCost: 47
          }
    ]
}

export default function(state=initalState,action){
    switch (action.type){
        case ADD_TO_CART: {
            return {
                ...state,
                cart: [
                    ...state.cart,
                    action.payload
                ]
            }
        }
        case UPDATE_CART: {
            return {
                ...state,
                cart: [
                    ...state.cart,
                    action.payload
                ]
            }
        }
        case DELETE_FROM_CART: {
            return {
                ...state,
                cart:state.cart.filter(item => item.product !== action.payload.product)
            }
        }
        default: return state;
    }
}


