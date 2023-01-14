import {ADD_TO_CART} from '../Constant'
const initialState = {
    cardData : []
}
export default function cartItems(state= initialState,action){
    switch(action.type){
        case ADD_TO_CART : 
        return {
            ...state,
            cardData: [...state.cardData, {...action.payload}]
        }
        default: 
        return state
    }
    
}
