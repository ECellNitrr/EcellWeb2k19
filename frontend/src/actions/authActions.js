export const updateUser = payload => dispatch => {
    dispatch({
        type: 'update_user',
        payload
    })
} 