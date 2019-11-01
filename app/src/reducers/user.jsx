const user = {
    user: {
        email: 'ortivo.sol@gmail.com'
    }
}

const userReducer = (state = user, action) => {
    switch (action.type) {
        case 'USER_USER':
            return Object.assign({}, state, {
                user: action.payload
            });
        default:
            return state;
    }
}

export default userReducer;