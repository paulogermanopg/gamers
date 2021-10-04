import { FAVORITAR_PRODUTO, HISTORICO } from '../actions/actionTypes'

const initialState = {
    favoritos: [],
    historico: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FAVORITAR_PRODUTO:
            return {
                ...state,
                favoritos: action.payload.favoritos,
            }

        case HISTORICO:
            return {
                ...state,
                historico: action.payload.historico,
            }
            
        default:
            return state
    }
}

export default reducer 