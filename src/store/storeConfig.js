import { createStore, combineReducers } from 'redux'
import produtosReducer from './reducers/produtos'

const reducers = combineReducers({
    produtos: produtosReducer,
})

const storeConfig = () => {
    return createStore(reducers)
}

export default storeConfig