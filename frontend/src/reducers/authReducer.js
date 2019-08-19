const initialState = {
    loggedin: false,
    first_name: '',
    last_name: ''
}

export default (state = initialState, action) => {
    switch(action.type){
        case 'update_user': {
            return {
                ...state,
                ...action.payload
            }
        }
        default: 
            return state
    }
}