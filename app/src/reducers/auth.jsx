const auth = {
    isLogin: true,
    onSigninPage: false,
    onSignupPage: false,
    onForgotPage: false,
}

const authReducer = (state = auth, action) => {
    switch (action.type) {
        case 'AUTH_ISLOGIN':
            return Object.assign({}, state, {
                isLogin: action.payload
            });
        case 'AUTH_ONSIGNINPAGE':
            return Object.assign({}, state, {
                onSigninPage: action.payload
            });
        case 'AUTH_ONSIGNUPPAGE':
            return Object.assign({}, state, {
                onSignupPageex: action.payload
            });
        case 'AUTH_ONFORGOTPAGE':
            return Object.assign({}, state, {
                onForgotPage: action.payload
            });
        default:
            return state;
    }
}

export default authReducer;