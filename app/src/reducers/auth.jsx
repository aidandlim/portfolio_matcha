const auth = {
    isLogin: true,
    landingStatus: 0,
}

const authReducer = (state = auth, action) => {
    switch (action.type) {
        case 'AUTH_ISLOGIN':
            return Object.assign({}, state, {
                isLogin: action.payload
            });
        case 'AUTH_LANDINGSTATUS':
            return Object.assign({}, state, {
                landingStatus: action.payload
            });
        default:
            return state;
    }
}

export default authReducer;