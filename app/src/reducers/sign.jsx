const sign = {
    message: null,
    email: '',
    password: '',
}

const signReducer = (state = sign, action) => {
    switch (action.type) {
        case 'SIGN_MESSAGE':
            return Object.assign({}, state, {
                message: action.payload
            });
        case 'SIGN_EMAIL':
            return Object.assign({}, state, {
                email: action.payload
            });
        case 'SIGN_PASSWORD':
            return Object.assign({}, state, {
                password: action.payload
            });
        default:
            return state;
    }
}

export default signReducer;