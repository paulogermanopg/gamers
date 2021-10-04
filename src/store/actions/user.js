import { FAVORITAR_PRODUTO, HISTORICO } from './actionTypes'

export const favoritar = produtos => {
    return {
        type: FAVORITAR_PRODUTO,
        payload: produtos
    }
}

export const registrar = produtos => {
    return {
        type: HISTORICO,
        payload: produtos
    }
}