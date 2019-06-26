import store from './store';
import {addToCart, updateCart, deleteFromCart} from './actions/cart-actions';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

const App = <h1>Redux Shopping</h1>


console.log('inital State', store.getState());

let unsubscribe = store.subscribe(() =>
{}
//   console.log(store.getState())
);

store.dispatch(addToCart('Coffee 500gm',1,250));
store.dispatch(addToCart('Flour 1kg',2,110));
store.dispatch(addToCart('Juice 2L',1,250));

store.dispatch(updateCart('Flour 1kg',5,110));
store.dispatch(deleteFromCart('Coffee 500gm'));
const List = store.getState().cart.cart;
ReactDOM.render(
    <Provider store={store}>
        {App}
        {List.map( (e,index) => {
            return (
                <div key={index}>
                    {e.product}&nbsp;&nbsp;&nbsp;
                    {e.quantity}&nbsp;&nbsp;&nbsp;
                    {e.unitCost}&nbsp;&nbsp;&nbsp;
                </div>
            )
        })}
    </Provider>,
    document.getElementById('root')
)
unsubscribe();
