import { ADD_PRODUTO, CLEAN_CARRINHO } from './actionTypes'

export const addCarrinho = produtos => {
    return {
        type: ADD_PRODUTO,
        payload: produtos
    }
}

export const cleanCarrinho = () => {
    return {
        type: CLEAN_CARRINHO,
    }
}

