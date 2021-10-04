import { ADD_PRODUTO, LIMPAR_CARRINHO } from './actionTypes'

export const addCarrinho = produtos => {
    return {
        type: ADD_PRODUTO,
        payload: produtos
    }
}

export const limparCarrinho = () => {
    return {
        type: LIMPAR_CARRINHO,
    }
}

