import { createStore, combineReducers } from 'redux'
import produtosReducer from './reducers/produtos'
import userReducer from './reducers/user'

const reducers = combineReducers({
    produtos: produtosReducer,
    user: userReducer,
})

const storeConfig = () => {
    return createStore(reducers)
}

export default storeConfig