const ui = {
    color: '#F44336',
    landing: 0,
    notification: false,
    detail: false,
}

const uiReducer = (state = ui, action) => {
    switch (action.type) {
        case 'UI_COLOR':
            return Object.assign({}, state, {
                color: action.payload
            });
        case 'UI_LANDING':
            return Object.assign({}, state, {
                landing: action.payload
            });
        case 'UI_NOTIFICATION':
            return Object.assign({}, state, {
                notification: action.payload
            });
        case 'UI_DETAIL':
            return Object.assign({}, state, {
                detail: action.payload
            });
        default:
            return state;
    }
}

export default uiReducer;