const user = {
    data: {},
    isComplete: false,
}

const userReducer = (state = user, action) => {
    switch (action.type) {
        case 'USER_DATA':
            return Object.assign({}, state, {
                data: action.payload
            });
        case 'USER_ISCOMPLETE':
            return Object.assign({}, state, {
                isComplete: action.payload
            });
        default:
            return state;
    }
}

export default userReducer;