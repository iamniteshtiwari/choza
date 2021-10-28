import { createStore as reduxCreateStore, combineReducers, applyMiddleware, compose } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import {UserReducer} from '../users/reducers';
import { ItemsReducer } from '../items/reducers'
import CartItem from '../../components/common/CartItem';



export default function createStore(history) {
    return reduxCreateStore(
        combineReducers({
            router: connectRouter(history),
            user: UserReducer,
            items: ItemsReducer,
            cart: CartItem
        }),
        compose(
            applyMiddleware(routerMiddleware(history), thunk),
            // DEBUG MODE
            // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    );
}
