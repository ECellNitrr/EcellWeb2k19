import * as actionsType from '../actionType'

const initialState = {
    loggedIn: false
}

export default (state = initialState, action) => {
    switch(action.type){
        case actionsType.LOGIN: {
            console.log('logging')
        }
        default: 
            return state
    }
}