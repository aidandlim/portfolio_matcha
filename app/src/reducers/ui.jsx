const ui = {
    color: '#F44336',
    notification: false,
}

const uiReducer = (state = ui, action) => {
    switch (action.type) {
        case 'UI_COLOR':
            return Object.assign({}, state, {
                color: action.payload
            });
        case 'UI_NOTIFICATION':
            return Object.assign({}, state, {
                notification: action.payload
            });
        default:
            return state;
    }
}

export default uiReducer;