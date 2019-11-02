const ui = {
    nav: 0,
        // Navigation :     0
        // Matching :       1
        // Searching :      2
        // chatting :       3
    isLogin: false,
    isRegister: false,
    isForgot: false,
}

const uiReducer = (state = ui, action) => {
    switch (action.type) {
        case 'UI_NAV':
            return Object.assign({}, state, {
                nav: action.payload
            });
        case 'UI_ISLOGIN':
            return Object.assign({}, state, {
                isLogin: action.payload
            });
        case 'UI_ISREGISTER':
            return Object.assign({}, state, {
                isRegister: action.payload
            });
        case 'UI_ISFORGOT':
            return Object.assign({}, state, {
                isForgot: action.payload
            });
        default:
            return state;
    }
}

export default uiReducer;